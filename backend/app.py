from fastapi import FastAPI, HTTPException

from schemas import (
    RentabiliteInput,
    RentabiliteOutput,
    TaxSimulatorInput,
    TaxSimulatorOutput,
)
from logic import analyze_rentabilite, recommend_company_type

app = FastAPI(
    title="Business Simulator API",
    description="用于项目盈利性分析与公司类型推荐的后端接口",
    version="1.0.0"
)


@app.get("/")
def root():
    return {"message": "API is running"}


@app.post("/rentabilite/analyze", response_model=RentabiliteOutput)
def analyze_rentabilite_endpoint(data: RentabiliteInput):
    try:
        result = analyze_rentabilite(data)
        return result
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception:
        raise HTTPException(status_code=500, detail="rentabilité 分析时发生服务器错误")


@app.post("/company-type/recommend", response_model=TaxSimulatorOutput)
def recommend_company_type_endpoint(data: TaxSimulatorInput):
    try:
        result = recommend_company_type(data)
        return result
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception:
        raise HTTPException(status_code=500, detail="公司类型推荐时发生服务器错误")