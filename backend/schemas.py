from enum import Enum
import re

from pydantic import BaseModel, EmailStr, Field, field_validator

# --------------------------------------------------------------------
# ------------------- HOTPOST 字段 ------------------
# --------------------------------------------------------------------
class ContactInfo(BaseModel):
    firstname: str = Field(..., min_length=1, description="名字")
    lastname: str = Field(..., min_length=1, description="姓氏")
    email: EmailStr = Field(..., description="邮箱")
    phone: str = Field(..., description="法国手机号")
    consent_service_contact: bool = Field(..., description="是否同意被联系")

    @field_validator("firstname", "lastname", mode="before")
    @classmethod
    def strip_text(cls, v):
        if isinstance(v, str):
            return v.strip()
        return v

    @field_validator("phone", mode="before")
    @classmethod
    def normalize_phone(cls, v):
        if not isinstance(v, str):
            raise ValueError("Le numéro de téléphone doit être une chaîne de caractères.")
        return re.sub(r"[.\-\s]", "", v.strip())

    @field_validator("phone")
    @classmethod
    def validate_french_mobile(cls, v):
        pattern = r"^(?:\+33[67]\d{8}|0[67]\d{8})$"
        if not re.fullmatch(pattern, v):
            raise ValueError("Veuillez saisir un numéro de téléphone mobile français valide, par exemple 0612345678")
        return v

    @field_validator("consent_service_contact")
    @classmethod
    def validate_consent(cls, v):
        if v is not True:
            raise ValueError("Vous devez accepter d'être contacté pour pouvoir envoyer le formulaire.")
        return v

# --------------------------------------------------------------------
# ------------------- 功能1 计算seuil de rentabilite ------------------
# --------------------------------------------------------------------

# 计算rentabilite所需要的数据
class CompanyType(str, Enum):
    micro_entreprise = "micro_entreprise"
    entreprise_individuelle = "entreprise_individuelle"
    eurl = "eurl"
    sarl = "sarl"
    sasu = "sasu"
    sas = "sas"
    en_creation = "en_creation"
    autre = "autre"


class BusinessSector(str, Enum):
    restauration = "restauration"
    services = "services"
    commerce = "commerce"
    e_commerce = "e_commerce"
    conseil = "conseil"
    batiment = "batiment"
    beaute_bien_etre = "beaute_bien_etre"
    formation = "formation"
    profession_liberale = "profession_liberale"
    autre = "autre"


class RentabiliteInput(BaseModel):
    activity_type: BusinessSector = Field(..., description="经营范围")
    monthly_fixed_costs: float = Field(..., gt=0, description="每月固定支出")
    avg_revenue_per_order: float = Field(..., gt=0, description="每单平均收入")
    monthly_customers: int = Field(..., ge=0, description="每月客人数量")
    variable_cost_rate: float = Field(..., ge=0, le=1, description="每单成本占比，0到1之间")
    working_days_per_month: int = Field(..., gt=0, le=31, description="每月经营天数")

    contact: ContactInfo = Field(..., description="客户联系信息")


# 返回给用户的结果
class RentabiliteOutput(BaseModel):
    monthly_revenue: float = Field(..., description="预计月营业额")
    break_even_revenue: float = Field(..., description="达到盈亏平衡所需的月营业额")
    monthly_profit: float = Field(..., description="预计月利润")

    feasibility_level: str = Field(..., description="项目可行性等级")
    short_conclusion: str = Field(..., description="简要结论")
    main_risk: str = Field(..., description="当前识别出的主要风险")

    activity_advice: str = Field(..., description="与所属行业相关的建议")

# --------------------------------------------------------------------
# --------------------- 功能2 估计公司最适合的类型 --------------------- 
# --------------------------------------------------------------------
# similateur
class BusinessSector(str, Enum):
    restauration = "restauration"
    services = "services"
    commerce = "commerce"
    e_commerce = "e_commerce"
    conseil = "conseil"
    batiment = "batiment"
    beaute_bien_etre = "beaute_bien_etre"
    formation = "formation"
    profession_liberale = "profession_liberale"
    autre = "autre"


class RevenueLevel(str, Enum):
    faible = "faible"
    moyen = "moyen"
    eleve = "eleve"


class ExpenseLevel(str, Enum):
    faible = "faible"
    moyen = "moyen"
    eleve = "eleve"


class LegalStatusRecommendation(str, Enum):
    micro_entreprise = "micro_entreprise"
    entreprise_individuelle = "entreprise_individuelle"
    eurl = "eurl"
    sasu = "sasu"
    sarl = "sarl"
    sas = "sas"


class TaxSimulatorInput(BaseModel):
    business_sector: BusinessSector = Field(..., description="经营范围")
    is_solo_founder: bool = Field(..., description="是否单人创业")
    expected_annual_revenue: RevenueLevel = Field(..., description="预计年营业额水平")
    expected_expense_level: ExpenseLevel = Field(..., description="预计成本水平")
    wants_simple_admin: bool = Field(..., description="是否优先追求管理简单")
    needs_financing: bool = Field(..., description="是否有融资或贷款需求")
    plans_to_hire: bool = Field(..., description="是否计划招聘员工")
    plans_to_add_partners: bool = Field(..., description="未来是否计划引入合伙人")

    contact: ContactInfo = Field(..., description="客户联系信息")

# similateur返回的结果
class TaxSimulatorOutput(BaseModel):
    recommended_status: LegalStatusRecommendation = Field(..., description="推荐的企业形式")
    alternative_status: LegalStatusRecommendation = Field(..., description="备选企业形式")
    tax_hint: str = Field(..., description="税务处理提示")
    short_reason: str = Field(..., description="简要推荐原因")
