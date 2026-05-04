export const LOCALES = {
  FR: 'fr',
  CN: 'cn',
}

export const translations = {
  fr: {
    htmlLang: 'fr',
    documentTitle: 'HXD Expertise | Simulateur de rentabilite',
    brandTitle: 'Simulateur de rentabilite',
    pageSubtitle:
      'Un simulateur financier simple, inspire des sites comparateurs francais : parcours clair, resultat immediat et collecte de leads rassurante.',
    navbarCta: 'Demarrer',
    localeLabel: 'Choix de langue',
    nav: {
      landing: 'Accueil',
      simulator: 'Simulation',
      promptBuilder: 'Prompts',
      result: 'Resultat',
      leadForm: 'Contact',
    },
    routes: {
      landing: 'Accueil',
      simulator: 'Simulation',
      result: 'Resultat',
      'lead-form': 'Contact',
      'prompt-builder': 'Generateur de prompt',
    },
    alertLeadSaved: 'Votre demande a bien ete envoyee. L equipe HXD Expertise peut vous recontacter.',
    landing: {
      featureCards: [
        {
          icon: 'FX',
          title: 'Pilotage financier instantane',
          description:
            'Visualisez en quelques secondes l impact de vos charges fixes, de votre marge et de votre prix de vente.',
        },
        {
          icon: 'KP',
          title: 'KPI lisibles pour decider',
          description:
            'Mettez en avant des indicateurs cles clairs pour partager un scenario credible avec vos associes ou investisseurs.',
        },
        {
          icon: 'LD',
          title: 'Collecte de leads qualifiee',
          description:
            'Transformez un simple simulateur en veritable point d entree commercial avec un formulaire contextualise.',
        },
        {
          icon: 'AI',
          title: 'Prompts de recherche prets a l emploi',
          description:
            'Generez un prompt clair a reutiliser dans un autre agent IA pour explorer un nouveau type d entreprise.',
        },
      ],
      steps: [
        {
          icon: '01',
          title: 'Renseignez vos chiffres',
          description:
            'Charges fixes, cout variable par unite et prix de vente suffisent pour lancer le calcul.',
        },
        {
          icon: '02',
          title: 'Analysez votre seuil',
          description:
            'Le simulateur estime le nombre d unites necessaires pour atteindre l equilibre financier.',
        },
        {
          icon: '03',
          title: 'Passez a l action',
          description:
            'Continuez vers un formulaire court pour demander un accompagnement ou qualifier un prospect.',
        },
      ],
      quickActions: [
        {
          label: 'Simulation',
          title: 'Calculer votre seuil de rentabilite',
          description: 'Obtenez rapidement un premier niveau de projection financiere.',
          cta: 'Lancer la simulation',
          action: 'simulation',
        },
        {
          label: 'Prompts IA',
          title: 'Formuler une bonne question business',
          description: 'Generez un prompt structure pour rechercher un nouveau type d entreprise.',
          cta: 'Generer un prompt',
          action: 'prompt',
        },
      ],
      testimonials: [
        {
          quote:
            'Nous avions besoin d un parcours simple mais tres rassurant. La lecture du seuil de rentabilite est immediate.',
          author: 'Claire M.',
          role: 'Responsable acquisition',
        },
        {
          quote:
            'Le design donne enfin l impression d un vrai produit SaaS premium et non d une simple calculatrice statique.',
          author: 'Nicolas R.',
          role: 'Head of Growth',
        },
      ],
      faqs: [
        {
          question: 'A quoi sert ce simulateur ?',
          answer:
            'Il permet d estimer rapidement le volume de ventes necessaire pour couvrir vos charges et atteindre votre seuil de rentabilite.',
        },
        {
          question: 'Est ce adapte a une startup en lancement ?',
          answer:
            'Oui. Le parcours est volontairement simple pour aider un porteur de projet a tester plusieurs hypotheses de prix et de couts.',
        },
        {
          question: 'Pourquoi ajouter un formulaire de contact ?',
          answer:
            'Le formulaire apparait apres la creation de valeur. Il permet de convertir les visiteurs interesses en leads plus qualifies.',
        },
      ],
      hero: {
        pill: 'HXD Expertise',
        title: 'Des outils simples pour comprendre, simuler et mieux decider.',
        subtitle:
          'HXD Expertise vous aide a passer plus vite de la question a l action. Choisissez votre parcours, obtenez un resultat clair et poursuivez ensuite avec le bon outil.',
        primaryCta: 'Commencer la simulation',
        secondaryCta: 'Generer un prompt IA',
        proofs: [
          { strong: '1 min', text: 'pour obtenir un premier resultat' },
          { strong: '2 parcours', text: 'simulation ou generation de prompt' },
          { strong: 'Parcours guide', text: 'des choix visibles des le premier ecran' },
        ],
        serviceKicker: 'Commencer ici',
        serviceTitle: 'Choisissez ce que vous voulez faire',
        serviceSubtitle: 'Deux parcours clairs, pensés pour rendre l interaction plus evidente.',
        serviceNote:
          'Un accompagnement plus lisible : l utilisateur sait immediatement ou cliquer selon son besoin.',
      },
      sections: {
        quickStartEyebrow: 'Commencer ici',
        quickStartTitle: 'Choisissez votre besoin en un coup d oeil.',
        trustEyebrow: 'Fiabilite',
        trustTitle:
          'Une interface plus proche du site officiel, avec des choix plus evidents.',
        trustLogos: ['HXD', 'Conseil', 'Finance', 'Formation', 'Contact'],
        featuresEyebrow: 'Fonctionnalites',
        featuresTitle:
          'Une experience plus lisible, plus institutionnelle et plus engageante.',
        previewEyebrow: 'Apercu du service',
        previewTitle: 'Des outils concrets pour guider l utilisateur sans ambiguite.',
        previewText:
          'Le visiteur comprend immediatement ce qu il peut faire, ou cliquer, et quel resultat attendre. L interface ne se contente plus de presenter le produit, elle oriente l action.',
        previewPrimaryCta: 'Tester le simulateur',
        previewSecondaryCta: 'Essayer le generateur de prompt',
        previewMetrics: [
          {
            label: 'Interaction plus evidente',
            strong: '82 %',
            text: 'grace a un parcours simplifie',
          },
          {
            label: 'Navigation guidee',
            strong: '2 parcours clairs',
            text: 'simulation ou generation de prompt',
          },
          {
            label: 'Impact commercial',
            strong: 'Contact mieux visible',
            text: 'grace a des CTA plus presents',
          },
        ],
        stepsEyebrow: 'Comment ca marche',
        stepsTitle: 'Un parcours clair du premier clic jusqu a la conversion.',
        testimonialsEyebrow: 'Temoignages',
        testimonialsTitle: 'Des signaux de confiance pour rassurer avant la prise de contact.',
        faqEyebrow: 'FAQ',
        faqTitle: 'Les questions que se posent les utilisateurs avant de demarrer.',
        finalEyebrow: 'Pret a lancer votre parcours',
        finalTitle: 'Passez de la curiosite a la simulation en un clic.',
        finalCta: 'Commencer maintenant',
      },
    },
    simulator: {
      eyebrow: 'Page de simulation',
      title: 'Calculez votre seuil de rentabilite',
      subtitle:
        'Renseignez vos charges et votre prix de vente pour estimer le nombre d unites necessaires pour atteindre l equilibre.',
      fixedCosts: 'Charges fixes',
      variableCost: 'Cout variable par unite',
      sellingPrice: 'Prix de vente',
      calculate: 'Calculer',
      guideEyebrow: 'Guide de simulation',
      guideTitle: 'Comment fonctionne le calcul',
      formula: 'charges fixes / (prix de vente - cout variable par unite)',
      guideText:
        'Ce calcul vous donne le volume minimum de ventes necessaire pour couvrir vos charges avant de generer du profit.',
      tipTitle: 'Conseil',
      tipText: 'Utilisez des charges fixes mensuelles realistes pour obtenir un resultat pertinent.',
      reminderTitle: 'Rappel',
      reminderText: 'Votre prix de vente doit rester superieur a votre cout variable par unite.',
    },
    result: {
      eyebrow: 'Page de resultat',
      title: 'Votre seuil de rentabilite',
      subtitle:
        'Consultez votre resultat, comprenez ce qu il signifie et poursuivez si vous souhaitez etre recontacte.',
      fixedCosts: 'Charges fixes',
      variableCost: 'Cout variable',
      sellingPrice: 'Prix de vente',
      explanationEyebrow: 'Explication',
      explanation:
        'Le seuil de rentabilite indique combien d unites vous devez vendre avant que votre chiffre d affaires couvre l ensemble de vos charges. Une fois ce seuil depasse, chaque vente supplementaire contribue au profit.',
      aiEyebrow: 'Conseil IA',
      aiText:
        'Texte indicatif : une assistance IA pourrait ici proposer des strategies de prix, des pistes d optimisation des couts ou des hypotheses de demande a partir de cette simulation.',
      continue: 'Continuer vers le formulaire',
      recalculate: 'Recalculer',
      nextEyebrow: 'Etape suivante',
      nextTitle: 'Transformer l interet en prise de contact',
      nextText:
        'Comme sur un site comparateur financier, la page resultat doit rassurer l utilisateur, expliquer clairement le chiffre et l inviter a poursuivre uniquement lorsqu il est pret.',
      summary: {
        emptyTitle: 'Aucune simulation pour le moment',
        emptyText:
          'Lancez la simulation pour afficher votre seuil de rentabilite et les prochaines etapes.',
        label: 'Seuil de rentabilite',
        unit: 'unites',
        textPrefix: 'Vous devez vendre environ',
        textSuffix: 'unites pour couvrir vos charges fixes selon votre modele de prix actuel.',
      },
    },
    lead: {
      eyebrow: 'Page de contact',
      title: 'Demander un accompagnement',
      subtitle:
        'Laissez vos coordonnees et quelques mots sur votre projet afin que l equipe puisse vous recontacter.',
      name: 'Nom',
      email: 'Email',
      phone: 'Telephone',
      phoneHint: 'Optionnel',
      projectDescription: 'Description du projet',
      submit: 'Envoyer',
      placeholders: {
        name: 'Jean Dupont',
        email: 'jean@entreprise.fr',
        phone: '+33 6 12 34 56 78',
        projectDescription: 'Decrivez votre projet, votre marche et vos objectifs actuels.',
      },
      whyEyebrow: 'Pourquoi ce formulaire fonctionne',
      whyTitle: 'Court, rassurant et efficace',
      whyText:
        'Le formulaire reste court, demande uniquement les informations utiles et intervient apres une premiere valeur delivree par la simulation.',
      cards: [
        {
          title: 'Parcours rassurant',
          text: 'La simulation d abord, les coordonnees ensuite.',
        },
        {
          title: 'Faible friction',
          text: 'Le telephone reste facultatif pour garder un formulaire accessible.',
        },
      ],
    },
    promptBuilder: {
      goals: [
        { value: 'market-analysis', label: 'Analyse de marche' },
        { value: 'positioning', label: 'Positionnement' },
        { value: 'pricing', label: 'Pricing' },
        { value: 'competition', label: 'Concurrence' },
        { value: 'acquisition', label: 'Acquisition' },
        { value: 'operations', label: 'Operations' },
      ],
      eyebrow: 'Generateur de prompt',
      title: 'Créez un prompt de recherche pour un autre agent IA',
      subtitle:
        "Decrivez le genre d'entreprise, le contexte et la question a poser. Nous generons ensuite un prompt prêt à utiliser pour vous faire la recherche.",
      companyType: "Type d'entreprise",
      companyStage: "Stade de l'entreprise",
      market: 'Marche cible',
      questionGoal: 'Objectif de recherche',
      userQuestion: 'Question a poser',
      constraints: 'Contraintes ou contexte supplementaire',
      copy: 'Copier le prompt',
      copied: 'Prompt copie dans le presse-papiers.',
      autoUpdate: 'Le prompt se met a jour automatiquement.',
      copyError:
        'Impossible de copier automatiquement. Vous pouvez copier le prompt manuellement.',
      outputEyebrow: 'Prompt genere',
      outputTitle: 'Prompt pret a utiliser',
      outputText: 'Copiez ce texte dans ChatGPT, Claude, Perplexity ou un autre agent de recherche.',
      previewHint: 'Le texte ci-dessous est la version finale qui sera copiee.',
      cards: [
        {
          title: 'Conseil',
          text: 'Ajoutez toujours un contexte concret pour obtenir une reponse plus utile.',
        },
        {
          title: 'Usage ideal',
          text: 'Cette fonctionnalite est utile pour explorer une nouvelle entreprise, un marche ou une strategie.',
        },
      ],
      collect: {
        title: 'Avant de copier le prompt',
        subtitle: 'Completez vos informations pour continuer. Le prompt sera copie automatiquement juste apres.',
        name: 'Nom',
        email: 'Email',
        company: 'Entreprise',
        phone: 'Telephone',
        placeholders: {
          name: 'Jean Dupont',
          email: 'jean@entreprise.fr',
          company: 'Nom de votre entreprise',
          phone: '+33 6 12 34 56 78',
        },
        cancel: 'Annuler',
        submit: 'Valider et copier',
        errors: {
          name: 'Le nom est obligatoire.',
          emailRequired: 'L email est obligatoire.',
          emailInvalid: 'Saisissez une adresse email valide.',
        },
      },
      placeholders: {
        companyType: 'Exemple : startup SaaS B2B, marque e-commerce, cabinet de conseil',
        companyStage: 'Exemple : idee, lancement, croissance, pre-seed',
        market: 'Exemple : PME francaises, retail premium, freelances tech',
        userQuestion: 'Exemple : comment cette entreprise peut elle se differencier sur son marche ?',
        constraints: 'Exemple : budget marketing limite, marche francais uniquement, cible B2B',
      },
    },
    validation: {
      simulation: {
        fixedCosts: 'Saisissez un montant de charges fixes valide.',
        variableCost: 'Saisissez un cout variable valide.',
        sellingPrice: 'Saisissez un prix de vente valide.',
        sellingPriceHigher: 'Le prix de vente doit etre superieur au cout variable.',
      },
      lead: {
        name: 'Le nom est obligatoire.',
        emailRequired: 'L email est obligatoire.',
        emailInvalid: 'Saisissez une adresse email valide.',
        projectDescription: 'La description du projet est obligatoire.',
      },
      prompt: {
        companyType: 'Le type d entreprise est obligatoire.',
        companyStage: 'Le stade de l entreprise est obligatoire.',
        market: 'Le marche cible est obligatoire.',
        userQuestion: 'La question a poser est obligatoire.',
      },
    },
    promptGoalLabels: {
      'market-analysis': 'une analyse de marche',
      positioning: 'un positionnement concurrentiel',
      pricing: 'une strategie de pricing',
      competition: 'une analyse de la concurrence',
      acquisition: 'des pistes d acquisition',
      operations: 'des recommandations operationnelles',
      default: 'une analyse business',
    },
    promptTemplate:
      `Tu es un analyste business specialise dans l'etude de nouvelles entreprises.\n\nJe veux une reponse courte sur {{goal}} pour une entreprise de type "{{companyType}}".\n\nContexte :\n- Type d'entreprise : {{companyType}}\n- Stade : {{companyStage}}\n- Marche cible : {{market}}\n- Question de l'utilisateur : {{userQuestion}}\n- Contraintes : {{constraints}}\n\nConsignes de reponse :\n- Commence obligatoirement par : "HXD Expertise proposed"\n- Donne une reponse courte, concrete et facile a lire.\n- Limite la reponse a 4 points maximum.\n- Evite les details inutiles et les longues explications.\n- Si une hypothese est necessaire, indique-la en une seule ligne.`,
    noConstraint: 'Aucune contrainte particuliere',
    formatLocale: 'fr-FR',
  },
  cn: {
    htmlLang: 'zh-CN',
    documentTitle: 'HXD Expertise | 盈亏平衡模拟器',
    brandTitle: '盈亏平衡模拟器',
    pageSubtitle:
      '一个简洁的财务模拟工具，灵感来自法国比较型网站：路径清晰、结果直接、线索收集自然。',
    navbarCta: '开始',
    localeLabel: '语言切换',
    nav: {
      landing: '首页',
      simulator: '模拟',
      promptBuilder: '提示词',
      result: '结果',
      leadForm: '联系',
    },
    routes: {
      landing: '首页',
      simulator: '模拟',
      result: '结果',
      'lead-form': '联系',
      'prompt-builder': '提示词生成器',
    },
    alertLeadSaved: '您的请求已成功发送，HXD Expertise 团队可以稍后与您联系。',
    landing: {
      featureCards: [
        {
          icon: 'FX',
          title: '即时财务分析',
          description: '几秒内查看固定成本、单位利润和售价对盈利能力的影响。',
        },
        {
          icon: 'KP',
          title: '清晰 KPI 辅助决策',
          description: '用清楚的关键指标帮助您与合伙人或投资人沟通商业假设。',
        },
        {
          icon: 'LD',
          title: '高质量线索收集',
          description: '把简单模拟器升级为真正的商业入口，并通过表单承接用户意向。',
        },
        {
          icon: 'AI',
          title: '可直接使用的研究提示词',
          description: '为新的企业类型生成清晰的提示词，方便在其他 AI 代理中继续研究。',
        },
      ],
      steps: [
        {
          icon: '01',
          title: '输入关键数据',
          description: '固定成本、单位变动成本和销售价格即可启动计算。',
        },
        {
          icon: '02',
          title: '查看盈亏平衡点',
          description: '系统将估算需要销售多少单位才能达到收支平衡。',
        },
        {
          icon: '03',
          title: '继续下一步',
          description: '通过简短表单申请支持，或将潜在客户转化为更高质量的线索。',
        },
      ],
      quickActions: [
        {
          label: '模拟',
          title: '计算您的盈亏平衡点',
          description: '快速获得第一层财务预测结果。',
          cta: '开始模拟',
          action: 'simulation',
        },
        {
          label: 'AI 提示词',
          title: '构建更好的商业问题',
          description: '生成结构化提示词，用于研究新的企业类型。',
          cta: '生成提示词',
          action: 'prompt',
        },
      ],
      testimonials: [
        {
          quote: '我们需要一个简单但非常让人安心的流程。盈亏平衡结果一眼就能读懂。',
          author: 'Claire M.',
          role: '获客负责人',
        },
        {
          quote: '这个设计终于像一个真正的高端产品，而不只是一个静态计算器。',
          author: 'Nicolas R.',
          role: '增长负责人',
        },
      ],
      faqs: [
        {
          question: '这个模拟器有什么作用？',
          answer: '它可以帮助您快速估算需要多少销售量才能覆盖成本并达到盈亏平衡。',
        },
        {
          question: '适合初创企业早期阶段使用吗？',
          answer: '适合。整个流程被刻意做得简单，方便创业者测试不同价格和成本假设。',
        },
        {
          question: '为什么要加入联系表单？',
          answer: '表单出现在用户已经获得价值之后，有助于将高意向访问者转化为更合格的线索。',
        },
      ],
      hero: {
        pill: 'HXD Expertise',
        title: '更简单地理解、模拟并做出更好的决策。',
        subtitle:
          'HXD Expertise 帮助您更快地从问题走向行动。选择适合的路径，获得清晰结果，再继续使用合适的工具。',
        primaryCta: '开始模拟',
        secondaryCta: '生成 AI 提示词',
        proofs: [
          { strong: '1 分钟', text: '即可获得首个结果' },
          { strong: '2 条路径', text: '财务模拟或提示词生成' },
          { strong: '引导清晰', text: '用户一进入页面就知道该点哪里' },
        ],
        serviceKicker: '从这里开始',
        serviceTitle: '选择您想要完成的事情',
        serviceSubtitle: '两个清晰路径，让用户交互更加直观。',
        serviceNote: '更清晰的引导方式：用户可以立刻知道自己应该点击哪里。',
      },
      sections: {
        quickStartEyebrow: '从这里开始',
        quickStartTitle: '一眼看懂您的需求入口。',
        trustEyebrow: '可信度',
        trustTitle: '更贴近官网风格的界面，也让用户选择更加明确。',
        trustLogos: ['HXD', '咨询', '财务', '培训', '联系'],
        featuresEyebrow: '功能',
        featuresTitle: '更清晰、更专业、更具参与感的使用体验。',
        previewEyebrow: '服务预览',
        previewTitle: '用具体工具引导用户，避免任何操作疑问。',
        previewText:
          '访问者可以立刻理解自己能做什么、应该点哪里以及预期结果是什么。界面不只是展示产品，而是在引导行动。',
        previewPrimaryCta: '试用模拟器',
        previewSecondaryCta: '试用提示词生成器',
        previewMetrics: [
          {
            label: '交互更直观',
            strong: '82 %',
            text: '受益于更简化的流程',
          },
          {
            label: '导航更明确',
            strong: '2 条清晰路径',
            text: '模拟或提示词生成',
          },
          {
            label: '商业转化提升',
            strong: '联系入口更明显',
            text: '因为 CTA 更突出',
          },
        ],
        stepsEyebrow: '如何运作',
        stepsTitle: '从第一次点击到转化的清晰路径。',
        testimonialsEyebrow: '客户评价',
        testimonialsTitle: '在联系之前先建立信任感。',
        faqEyebrow: '常见问题',
        faqTitle: '用户开始之前最常问的问题。',
        finalEyebrow: '准备开始',
        finalTitle: '从兴趣到模拟，只需一次点击。',
        finalCta: '立即开始',
      },
    },
    simulator: {
      eyebrow: '模拟页面',
      title: '计算您的盈亏平衡点',
      subtitle: '填写成本与售价，估算达到收支平衡所需的销售单位数量。',
      fixedCosts: '固定成本',
      variableCost: '单位变动成本',
      sellingPrice: '销售价格',
      calculate: '计算',
      guideEyebrow: '模拟指南',
      guideTitle: '计算方式说明',
      formula: '固定成本 /（销售价格 - 单位变动成本）',
      guideText: '这个计算结果会告诉您，在开始盈利之前至少需要达到的销售量。',
      tipTitle: '提示',
      tipText: '请使用真实的月度固定成本，以获得更有意义的结果。',
      reminderTitle: '注意',
      reminderText: '您的销售价格必须高于单位变动成本。',
    },
    result: {
      eyebrow: '结果页面',
      title: '您的盈亏平衡点',
      subtitle: '查看结果，理解其含义，如需后续支持可继续下一步。',
      fixedCosts: '固定成本',
      variableCost: '变动成本',
      sellingPrice: '销售价格',
      explanationEyebrow: '说明',
      explanation:
        '盈亏平衡点表示您需要销售多少单位，才能让营业收入覆盖全部成本。超过这一点后，每一笔新增销售都将为利润做出贡献。',
      aiEyebrow: 'AI 建议',
      aiText:
        '这里未来可以由 AI 提供定价策略、成本优化建议或基于当前模拟结果的市场假设。',
      continue: '继续填写表单',
      recalculate: '重新计算',
      nextEyebrow: '下一步',
      nextTitle: '把兴趣转化为进一步沟通',
      nextText:
        '像金融比较网站一样，结果页应该让用户安心、清楚解释数字，并在用户准备好时邀请其继续下一步。',
      summary: {
        emptyTitle: '暂时还没有模拟结果',
        emptyText: '请先启动模拟，查看您的盈亏平衡点和后续建议。',
        label: '盈亏平衡点',
        unit: '单位',
        textPrefix: '您大约需要销售',
        textSuffix: '个单位，才能在当前定价模型下覆盖固定成本。',
      },
    },
    lead: {
      eyebrow: '联系页面',
      title: '申请进一步支持',
      subtitle: '留下您的联系方式和项目描述，团队之后可以与您取得联系。',
      name: '姓名',
      email: '邮箱',
      phone: '电话',
      phoneHint: '可选',
      projectDescription: '项目描述',
      submit: '提交',
      placeholders: {
        name: '张三',
        email: 'zhangsan@company.cn',
        phone: '+86 138 0000 0000',
        projectDescription: '请描述您的项目、目标市场以及当前阶段目标。',
      },
      whyEyebrow: '为什么这个表单有效',
      whyTitle: '简短、安心、效率高',
      whyText: '表单保持简洁，只收集必要信息，并在用户通过模拟获得价值之后再出现。',
      cards: [
        {
          title: '更安心的路径',
          text: '先做模拟，再提交联系方式。',
        },
        {
          title: '更低的填写阻力',
          text: '电话保持可选，以减少用户填写压力。',
        },
      ],
    },
    promptBuilder: {
      goals: [
        { value: 'market-analysis', label: '市场分析' },
        { value: 'positioning', label: '定位分析' },
        { value: 'pricing', label: '定价策略' },
        { value: 'competition', label: '竞争分析' },
        { value: 'acquisition', label: '获客策略' },
        { value: 'operations', label: '运营建议' },
      ],
      eyebrow: '提示词生成器',
      title: '为其他 AI 代理生成研究提示词',
      subtitle:
        '描述企业类型、上下文和问题，我们会生成一段可直接复制到其他 AI 工具中的提示词。',
      companyType: '企业类型',
      companyStage: '企业阶段',
      market: '目标市场',
      questionGoal: '研究目标',
      userQuestion: '想要提出的问题',
      constraints: '补充限制或上下文',
      copy: '复制提示词',
      copied: '提示词已复制到剪贴板。',
      autoUpdate: '提示词会自动更新。',
      copyError: '无法自动复制，您可以手动复制提示词。',
      outputEyebrow: '生成结果',
      outputTitle: '可直接使用的提示词',
      outputText: '可将这段内容复制到 ChatGPT、Claude、Perplexity 或其他研究型 AI 中。',
      previewHint: '下方内容就是最终将被复制的提示词。',
      cards: [
        {
          title: '建议',
          text: '请尽量加入具体上下文，这样生成的结果会更有用。',
        },
        {
          title: '适用场景',
          text: '这个功能适合用来探索新的企业类型、市场方向或商业策略。',
        },
      ],
      collect: {
        title: '复制提示词之前',
        subtitle: '请先填写您的信息，完成后系统会自动复制提示词。',
        name: '姓名',
        email: '邮箱',
        company: '公司',
        phone: '电话',
        placeholders: {
          name: '张三',
          email: 'zhangsan@company.cn',
          company: '您的公司名称',
          phone: '+86 138 0000 0000',
        },
        cancel: '取消',
        submit: '确认并复制',
        errors: {
          name: '姓名为必填项。',
          emailRequired: '邮箱为必填项。',
          emailInvalid: '请输入有效的邮箱地址。',
        },
      },
      placeholders: {
        companyType: '例如：B2B SaaS 初创公司、电商品牌、咨询公司',
        companyStage: '例如：想法阶段、上线阶段、增长阶段、Pre-seed',
        market: '例如：中国中小企业、高端零售、技术自由职业者',
        userQuestion: '例如：这家公司应该如何在目标市场中形成差异化？',
        constraints: '例如：营销预算有限、仅面向中国市场、目标客户为 B2B',
      },
    },
    validation: {
      simulation: {
        fixedCosts: '请输入有效的固定成本金额。',
        variableCost: '请输入有效的变动成本。',
        sellingPrice: '请输入有效的销售价格。',
        sellingPriceHigher: '销售价格必须高于单位变动成本。',
      },
      lead: {
        name: '姓名为必填项。',
        emailRequired: '邮箱为必填项。',
        emailInvalid: '请输入有效的邮箱地址。',
        projectDescription: '项目描述为必填项。',
      },
      prompt: {
        companyType: '企业类型为必填项。',
        companyStage: '企业阶段为必填项。',
        market: '目标市场为必填项。',
        userQuestion: '问题内容为必填项。',
      },
    },
    promptGoalLabels: {
      'market-analysis': '市场分析',
      positioning: '竞争定位分析',
      pricing: '定价策略研究',
      competition: '竞争对手分析',
      acquisition: '获客策略建议',
      operations: '运营优化建议',
      default: '商业分析',
    },
    promptTemplate:
      `你是一名研究新公司的商业分析师。\n\n我需要你针对“{{companyType}}”类型企业的{{goal}}给出一份简短回答。\n\n背景信息：\n- 企业类型：{{companyType}}\n- 企业阶段：{{companyStage}}\n- 目标市场：{{market}}\n- 用户问题：{{userQuestion}}\n- 附加限制：{{constraints}}\n\n回答要求：\n- 开头必须写："HXD Expertise proposed"\n- 回答保持简短、清晰、可执行。\n- 最多输出 4 个要点。\n- 不要写冗长分析，不要加入用户不会阅读的无用信息。\n- 如果必须假设，请只用一行说明。`,
    noConstraint: '无特殊限制',
    formatLocale: 'zh-CN',
  },
}

export function getTranslations(locale) {
  return translations[locale] ?? translations.fr
}
