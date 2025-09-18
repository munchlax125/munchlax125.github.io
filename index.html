<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>부동산 법인 A to Z: 인터랙티브 가이드</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
    <!-- Chosen Palette: Warm Neutrals -->
    <!-- Application Structure Plan: 사용자의 정보 습득 과정을 고려하여 5개의 주제(왜 법인인가?, 설립 가이드, 운영과 세금, 투자 전략, 리스크 관리)로 정보를 재구성했습니다. 각 주제는 독립적이면서도 유기적으로 연결됩니다. 사용자는 상단 네비게이션을 통해 원하는 정보에 빠르게 접근하거나, 페이지를 스크롤하며 자연스럽게 법인 설립부터 운영까지의 전 과정을 학습할 수 있습니다. 복잡한 세금 비교는 인터랙티브 차트로 시각화하고, 실무적인 팁은 Q&A 형식으로 제공하여 사용자의 이해도와 참여를 높이는 데 중점을 두었습니다. -->
    <!-- Visualization & Content Choices: 1. 개인 vs 법인 세율 비교 -> 목표: 비교 -> 방법: Bar Chart (Chart.js) -> 상호작용: 과세표준에 따른 세율 차이를 직관적으로 보여줌. 2. 설립 절차 -> 목표: 정보 조직화 -> 방법: HTML/CSS 기반 순서도 -> 상호작용: 각 단계를 클릭하면 상세 설명이 나타나 복잡한 절차를 쉽게 이해시킴. 3. 보유세 비교 -> 목표: 비교 -> 방법: Bar Chart (Chart.js) -> 상호작용: 법인과 개인의 종부세 차이를 극명하게 보여주어 법인 활용의 핵심 이유를 전달. 4. 경비 처리 -> 목표: 정보 제공 -> 방법: 인터랙티브 Q&A 그리드 -> 상호작용: 사용자가 궁금한 항목을 직접 클릭하여 답을 얻는 방식으로 능동적인 정보 탐색을 유도함. -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #FDFBF7;
            color: #383838;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            height: 400px;
            max-height: 50vh;
        }
        .nav-link {
            transition: color 0.3s, border-bottom-color 0.3s;
        }
        .nav-link:hover, .nav-link.active {
            color: #0B726C;
            border-bottom-color: #0B726C;
        }
        .step-card {
            transition: all 0.3s ease-in-out;
            border-left-width: 4px;
            border-left-color: transparent;
        }
        .step-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05);
            border-left-color: #0B726C;
        }
        .modal {
            display: none;
            transition: opacity 0.3s ease;
        }
        .modal.show {
            display: flex;
        }
        .sticky-nav {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 50;
        }
    </style>
</head>
<body class="bg-[#FDFBF7]">

    <header class="text-center py-12 px-4 bg-white shadow-sm">
        <h1 class="text-4xl md:text-5xl font-bold text-[#383838]">부동산 법인 A to Z</h1>
        <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">복잡한 부동산 법인 설립과 운영, 핵심만 모아 인터랙티브 가이드로 쉽게 이해하세요.</p>
    </header>
    
    <nav id="navbar" class="sticky-nav bg-white/80 backdrop-blur-lg shadow-md">
        <div class="container mx-auto px-4">
            <div class="flex justify-center items-center space-x-4 md:space-x-8 overflow-x-auto py-3">
                <a href="#section-why" class="nav-link text-sm md:text-base font-semibold text-gray-600 py-2 border-b-2 border-transparent whitespace-nowrap">왜 법인인가?</a>
                <a href="#section-setup" class="nav-link text-sm md:text-base font-semibold text-gray-600 py-2 border-b-2 border-transparent whitespace-nowrap">설립 가이드</a>
                <a href="#section-tax" class="nav-link text-sm md:text-base font-semibold text-gray-600 py-2 border-b-2 border-transparent whitespace-nowrap">운영과 세금</a>
                <a href="#section-strategy" class="nav-link text-sm md:text-base font-semibold text-gray-600 py-2 border-b-2 border-transparent whitespace-nowrap">투자 전략</a>
                <a href="#section-risk" class="nav-link text-sm md:text-base font-semibold text-gray-600 py-2 border-b-2 border-transparent whitespace-nowrap">리스크 관리</a>
            </div>
        </div>
    </nav>

    <main class="container mx-auto p-4 md:p-8">
        
        <section id="section-why" class="py-16 scroll-mt-20">
            <h2 class="text-3xl font-bold text-center mb-2">왜 법인으로 투자해야 할까?</h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">법인은 '생각 없는 깡통 로보트'와 같습니다. 잘 조종하면 강력한 절세 도구가 되지만, 잘못 다루면 큰 위험이 따릅니다. 개인 투자와 무엇이 다른지 핵심부터 알아보세요.</p>

            <div class="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                <h3 class="text-2xl font-bold mb-4 text-center">한눈에 보는 개인 vs 법인 부동산 양도세율</h3>
                <p class="text-center text-gray-500 mb-6">동일한 양도차익이 발생했을 때, 개인과 법인의 기본 세율 차이를 확인해보세요. 법인의 절세 효과를 직관적으로 이해할 수 있습니다.</p>
                <div class="chart-container">
                    <canvas id="taxRateChart"></canvas>
                </div>
                 <p class="text-xs text-center text-gray-400 mt-4">* 본 차트는 기본적인 세율 구조 비교를 위한 것이며, 실제 세액은 각종 공제 및 중과세율에 따라 달라질 수 있습니다.</p>
            </div>
        </section>

        <section id="section-setup" class="py-16 scroll-mt-20">
            <h2 class="text-3xl font-bold text-center mb-2">법인 설립, 단계별 완전 정복</h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">법인 설립은 정해진 절차를 따르는 과정입니다. 8가지 필수 준비물을 챙겨 아래 단계를 따라가면, 누구나 나만의 법인을 만들 수 있습니다. 각 단계를 클릭하여 상세 내용을 확인하세요.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="step-card bg-white p-6 rounded-lg cursor-pointer" onclick="openModal('modal-step1')">
                    <div class="flex items-center mb-3">
                        <span class="bg-[#0B726C]/10 text-[#0B726C] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
                        <h3 class="text-xl font-bold">기본사항 결정</h3>
                    </div>
                    <p class="text-gray-600">상호, 본점 주소, 자본금 등 법인의 밑그림을 그리는 단계입니다.</p>
                </div>
                <div class="step-card bg-white p-6 rounded-lg cursor-pointer" onclick="openModal('modal-step2')">
                     <div class="flex items-center mb-3">
                        <span class="bg-[#0B726C]/10 text-[#0B726C] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
                        <h3 class="text-xl font-bold">서류 준비</h3>
                    </div>
                    <p class="text-gray-600">법인의 헌법인 '정관'을 작성하고 주주와 임원을 구성합니다.</p>
                </div>
                <div class="step-card bg-white p-6 rounded-lg cursor-pointer" onclick="openModal('modal-step3')">
                    <div class="flex items-center mb-3">
                        <span class="bg-[#0B726C]/10 text-[#0B726C] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">3</span>
                        <h3 class="text-xl font-bold">설립 등기</h3>
                    </div>
                    <p class="text-gray-600">준비된 서류로 관할 등기소에 법인의 탄생을 공식적으로 알립니다.</p>
                </div>
                <div class="step-card bg-white p-6 rounded-lg cursor-pointer" onclick="openModal('modal-step4')">
                     <div class="flex items-center mb-3">
                        <span class="bg-[#0B726C]/10 text-[#0B726C] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">4</span>
                        <h3 class="text-xl font-bold">사업자 등록</h3>
                    </div>
                    <p class="text-gray-600">관할 세무서에 사업자 등록을 신청하여 영업 활동을 시작합니다.</p>
                </div>
            </div>
        </section>

        <section id="section-tax" class="py-16 scroll-mt-20">
            <h2 class="text-3xl font-bold text-center mb-2">운영과 세금: 절세의 기술</h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">법인 운영은 세금과의 싸움입니다. 취득, 보유, 양도 각 단계에서 발생하는 세금의 종류를 이해하고, 경비를 스마트하게 처리하는 방법을 알아보세요.</p>
            
            <div class="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8">
                <h3 class="text-2xl font-bold mb-4 text-center">핵심 비교: 주택 보유세 (종합부동산세)</h3>
                <p class="text-center text-gray-500 mb-6">법인으로 주택 투자를 망설이는 가장 큰 이유, 바로 종합부동산세입니다. 동일한 가액의 주택 보유 시 개인과 법인의 세금 차이를 확인하면 왜 상업용 부동산 투자가 대안이 되는지 알 수 있습니다.</p>
                <div class="chart-container">
                    <canvas id="holdingTaxChart"></canvas>
                </div>
            </div>

            <div class="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                <h3 class="text-2xl font-bold mb-4 text-center">경비처리, 이것만은 알고 가자!</h3>
                <p class="text-center text-gray-500 mb-8">법인세 절감의 핵심은 '업무 관련성'이 있는 비용을 '적격 증빙'을 갖춰 인정받는 것입니다. 아래 항목들을 클릭하여 경비 처리 가능 여부와 주의사항을 확인해보세요.</p>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-[#0B726C]/10 transition" onclick="openModal('modal-expense1')">대표이사 급여</div>
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-[#0B726C]/10 transition" onclick="openModal('modal-expense2')">가족 인건비</div>
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-[#0B726C]/10 transition" onclick="openModal('modal-expense3')">차량 유지비</div>
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-[#0B726C]/10 transition" onclick="openModal('modal-expense4')">대출 이자</div>
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-[#0B726C]/10 transition" onclick="openModal('modal-expense5')">접대비</div>
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-[#0B726C]/10 transition" onclick="openModal('modal-expense6')">인테리어 비용</div>
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-[#0B726C]/10 transition" onclick="openModal('modal-expense7')">부가세 공제</div>
                    <div class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-[#0B726C]/10 transition" onclick="openModal('modal-expense8')">가지급금</div>
                </div>
            </div>
        </section>

        <section id="section-strategy" class="py-16 scroll-mt-20">
            <h2 class="text-3xl font-bold text-center mb-2">스마트한 법인 투자 전략</h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">법인은 단순한 절세 도구를 넘어, 다양한 투자 포트폴리오를 구축하는 플랫폼이 될 수 있습니다. 최근 트렌드와 법인을 활용한 구체적인 절세 케이스를 살펴보세요.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-4">요즘 트렌드: 수익형 부동산 & 미술품</h3>
                    <p class="text-gray-600 mb-4">높은 종부세로 주택 투자가 어려워지면서, 법인 투자자들은 <span class="font-bold text-[#0B726C]">상가, 지식산업센터 등 상업용 부동산</span>으로 눈을 돌리고 있습니다. 취득 시 부가세 환급이 가능하고 보유세 부담이 적기 때문입니다.</p>
                    <p class="text-gray-600">또한, 새로운 투자처로 <span class="font-bold text-[#0B726C]">미술품</span>이 주목받고 있습니다. 1천만 원 이하의 미술품을 사무실에 전시할 경우 전액 비용 처리가 가능하여 절세와 투자를 동시에 노릴 수 있습니다.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-4">법인 활용 절세 Case Study</h3>
                    <ul class="space-y-3 list-disc list-inside text-gray-600">
                        <li><span class="font-semibold">1세대 1주택 비과세 만들기:</span> 다주택자가 일부 주택을 법인에 이전하여 1주택 비과세 요건을 맞추는 전략</li>
                        <li><span class="font-semibold">양도소득세 절감:</span> 양도차익이 큰 부동산을 법인에 현물출자하여 취득가액을 높인 후 양도하는 전략</li>
                        <li><span class="font-semibold">청약 자격 확보:</span> 유주택자가 보유 주택을 법인으로 이전하여 무주택 자격을 만들어 청약에 도전</li>
                    </ul>
                    <p class="mt-4 text-sm text-red-600 font-semibold">※ 주의: 위 전략들은 합법적인 절차와 대가 수수가 필수입니다. 단순 명의 이전은 '명의신탁'으로 간주되어 처벌받을 수 있습니다.</p>
                </div>
            </div>
        </section>

        <section id="section-risk" class="py-16 scroll-mt-20">
            <h2 class="text-3xl font-bold text-center mb-2">세무조사, 아는 만큼 피한다</h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">성실한 신고가 최고의 절세입니다. 국세청이 어떤 항목을 유심히 보는지 알고 미리 대비하여 세무조사의 위험을 줄이세요.</p>
            <div class="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                <h3 class="text-2xl font-bold mb-6 text-center">세무조사 주요 타겟 6가지</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="text-center p-4">
                        <span class="text-5xl">💳</span>
                        <h4 class="font-bold text-lg mt-2">법인카드 사적사용</h4>
                        <p class="text-sm text-gray-500">업무와 무관한 개인적 용도 결제</p>
                    </div>
                    <div class="text-center p-4">
                        <span class="text-5xl">👨‍👩‍👧‍👦</span>
                        <h4 class="font-bold text-lg mt-2">가공 인건비</h4>
                        <p class="text-sm text-gray-500">근무하지 않는 친인척 급여 지급</p>
                    </div>
                    <div class="text-center p-4">
                        <span class="text-5xl">📉</span>
                        <h4 class="font-bold text-lg mt-2">매출 누락</h4>
                        <p class="text-sm text-gray-500">계약금 등을 개인계좌로 수령</p>
                    </div>
                    <div class="text-center p-4">
                        <span class="text-5xl">💸</span>
                        <h4 class="font-bold text-lg mt-2">가지급금</h4>
                        <p class="text-sm text-gray-500">증빙 없는 자금 인출</p>
                    </div>
                     <div class="text-center p-4">
                        <span class="text-5xl">🤝</span>
                        <h4 class="font-bold text-lg mt-2">특수관계자 거래</h4>
                        <p class="text-sm text-gray-500">시가와 다른 비정상적 거래</p>
                    </div>
                     <div class="text-center p-4">
                        <span class="text-5xl">🎁</span>
                        <h4 class="font-bold text-lg mt-2">상품권 과다구매</h4>
                        <p class="text-sm text-gray-500">업무 관련성 없는 대량 구매</p>
                    </div>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-200">
                    <h4 class="text-xl font-bold text-center mb-4">세무조사 대비 5대 원칙</h4>
                     <ol class="list-decimal list-inside space-y-2 max-w-xl mx-auto text-gray-700">
                        <li>모든 거래는 **적격 증빙**을 수취한다.</li>
                        <li>가족 등 특수관계자와의 거래는 반드시 **시가**를 따른다.</li>
                        <li>법인 계좌는 오직 **사업 관련 입출금**에만 사용한다.</li>
                        <li>주주총회, 이사회 등 **상법상 절차**를 준수하고 의사록을 남긴다.</li>
                        <li>**가지급금**이 발생하지 않도록 철저히 관리한다.</li>
                    </ol>
                </div>
            </div>
        </section>
    </main>
    
    <footer class="text-center py-8 bg-white border-t">
        <p class="text-gray-500">본 콘텐츠는 '부동산 법인 강의' 자료를 바탕으로 제작된 교육용 웹 애플리케이션입니다.</p>
        <p class="text-sm text-gray-400 mt-2">© 2025 Interactive Guide. All Rights Reserved.</p>
    </footer>

    <!-- Modals -->
    <div id="modal-container">
        <!-- Step Modals -->
        <div id="modal-step1" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">Step 1: 기본사항 결정</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>상호:</strong> 동일 관할구역 내 중복 불가. '대법원 인터넷등기소'에서 사전 확인 필수.</li>
                    <li><strong>본점 소재지:</strong> 세금 중과를 피하려면 '수도권 과밀억제권역' 밖을 추천. 자택, 공유오피스도 가능.</li>
                    <li><strong>자본금:</strong> 최소 금액 제한은 없으나, 대출 등을 고려해 통상 1천만원 내외로 설정. 각 주주가 직접 입금해야 명의신탁 문제를 피할 수 있음.</li>
                    <li><strong>사업 목적:</strong> 부동산 임대, 매매, 컨설팅 등 향후 진행할 모든 사업 내용을 구체적으로 정관에 기재.</li>
                </ul>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        <div id="modal-step2" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">Step 2: 서류 준비 (정관, 주주, 임원)</h3>
                 <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>정관 작성:</strong> 법인의 헌법. 특히 '임원 보수/퇴직금 규정', '초과배당' 등 절세 관련 조항을 반드시 포함시켜야 함.</li>
                    <li><strong>주주 구성:</strong> 법인의 주인. 특수관계자 지분이 50%를 초과하는 '과점주주'가 되면 세금 체납 시 2차 납세의무 등 책임이 따름.</li>
                    <li><strong>임원 결정:</strong> 대표이사를 포함한 이사, 감사. 자본금 10억 미만은 이사 1명만으로도 설립 가능. 설립 등기 시 주식이 없는 임원 1명(조사역)이 필요.</li>
                    <li><strong>법인 인감 제작:</strong> 등기소에 등록할 공식 도장 제작.</li>
                </ul>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        <div id="modal-step3" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">Step 3: 설립 등기</h3>
                <p class="text-gray-700 mb-4">준비된 모든 서류(등기신청서, 정관, 주주명부, 잔고증명서, 임원 취임승낙서 등)를 구비하여 관할 등기소에 제출합니다.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>방법:</strong> 법무사 대행, 온라인 법인설립시스템 이용, 또는 직접 방문 신청.</li>
                    <li><strong>비용:</strong> 자본금에 따라 등록면허세, 지방교육세, 공증료, 수수료 등이 발생.</li>
                    <li><strong>완료:</strong> 등기 신청 후 보통 2~5일 이내에 처리되며, 완료 후 법인 등기부등본 발급이 가능.</li>
                </ul>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        <div id="modal-step4" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">Step 4: 사업자 등록</h3>
                <p class="text-gray-700 mb-4">법인 설립 등기 완료 후 20일 이내에 관할 세무서에 사업자 등록을 신청해야 합니다. 홈택스를 통한 온라인 신청도 가능합니다.</p>
                 <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>필수 서류:</strong> 사업자등록신청서, 법인 등기부등본, 정관, 주주명부, 법인 명의의 임대차계약서, 대표자 신분증.</li>
                    <li><strong>핵심:</strong> 세무서는 '실제로 사업을 할 것인지'를 가장 중요하게 보므로, 서류를 꼼꼼히 준비해야 함.</li>
                    <li><strong>공유오피스:</strong> 비상주 사무실의 경우 사업 실체 소명이 중요하며, 경우에 따라 등록이 거부될 수 있어 주의 필요.</li>
                </ul>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        
        <!-- Expense Modals -->
        <div id="modal-expense1" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">경비 Q&A: 대표이사 급여</h3>
                <p class="text-gray-800 font-semibold">Q. 대표이사에게 지급한 급여는 경비처리 가능한가요?</p>
                <p class="mt-2 text-gray-700">A. 네, 당연히 가능합니다. 정관이나 주주총회에서 정한 보수 한도 내에서 지급되는 급여는 전액 법인의 비용(손금)으로 인정됩니다. 4대보험 가입은 필수입니다.</p>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        <div id="modal-expense2" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">경비 Q&A: 가족 인건비</h3>
                <p class="text-gray-800 font-semibold">Q. 대표이사 가족에게 지급한 급여는 경비처리 가능한가요?</p>
                <p class="mt-2 text-gray-700">A. <span class="text-red-600 font-bold">실제로 근무하는 경우에만</span> 가능합니다. 근무 사실 없이 이름만 올리는 '가공 인건비'는 세무조사 1순위 타겟입니다. 실제 출퇴근 기록, 업무 내역 등 객관적인 증빙을 갖추고, 동종업계 비슷한 직무의 급여 수준에 맞는 합리적인 금액을 지급해야 합니다.</p>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        <div id="modal-expense3" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">경비 Q&A: 차량 유지비</h3>
                <p class="text-gray-800 font-semibold">Q. 법인 명의 차량 관련 비용은 어디까지 인정되나요?</p>
                <p class="mt-2 text-gray-700">A. 업무용 승용차 관련 비용(감가상각비, 유류비, 보험료, 자동차세 등)은 <span class="font-bold">연간 총 1,500만원</span>까지 비용으로 인정됩니다. 단, 임직원 전용 자동차보험 가입은 필수입니다. 1,500만원을 초과하여 비용을 인정받으려면 운행일지를 작성하여 업무사용비율을 입증해야 합니다. (부동산 임대업 주력 법인은 한도가 더 낮아짐)</p>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        <div id="modal-expense4" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">경비 Q&A: 대출 이자</h3>
                <p class="text-gray-800 font-semibold">Q. 대출금 이자는 모두 비용처리 되나요?</p>
                <p class="mt-2 text-gray-700">A. <span class="font-bold">업무와 관련된 자산</span>을 취득하기 위한 대출 이자만 비용으로 인정됩니다. 예를 들어, 법인 명의로 대출을 받아 대표이사의 개인 주택을 구입했다면, 해당 대출 이자는 비용으로 인정받을 수 없습니다.</p>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
         <div id="modal-expense5" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">경비 Q&A: 접대비</h3>
                <p class="text-gray-800 font-semibold">Q. 접대비는 어떻게 처리해야 하나요?</p>
                <p class="mt-2 text-gray-700">A. 건당 3만원(경조사비는 20만원)을 초과하는 접대비는 <span class="font-bold text-red-600">반드시 법인 신용카드</span>를 사용해야 합니다. 한도는 기본 연 1,200만원(중소기업 3,600만원)이며, 수입금액에 따라 추가 한도가 적용될 수 있습니다.</p>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
         <div id="modal-expense6" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">경비 Q&A: 인테리어 비용</h3>
                <p class="text-gray-800 font-semibold">Q. 인테리어 비용은 어떻게 처리되나요?</p>
                <p class="mt-2 text-gray-700">A. 지출 성격에 따라 다릅니다. 도배, 장판 교체 등 원상회복 수준의 '수익적 지출'은 발생 즉시 전액 비용처리됩니다. 반면, 발코니 확장, 시스템 에어컨 설치 등 자산 가치를 높이는 '자본적 지출'은 자산의 취득가액에 포함시킨 후, 내용연수(수명)에 따라 감가상각을 통해 여러 해에 걸쳐 비용 처리됩니다.</p>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        <div id="modal-expense7" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">경비 Q&A: 부가가치세 공제</h3>
                <p class="text-gray-800 font-semibold">Q. 모든 매입 부가세는 공제(환급)받을 수 있나요?</p>
                <p class="mt-2 text-gray-700">A. 아닙니다. 부가세가 <span class="font-bold">과세되는 사업(상가 임대 등)</span>과 관련된 매입세액만 공제 가능합니다. 부가세가 <span class="font-bold text-red-600">면제되는 사업(주택 임대 등)</span>과 관련된 매입세액은 공제받을 수 없습니다. 예를 들어, 임대용 주택의 인테리어 비용에 포함된 부가세는 공제 대상이 아닙니다.</p>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
        <div id="modal-expense8" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4" onclick="closeAllModals()">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
                <h3 class="text-2xl font-bold mb-4">경비 Q&A: 가지급금</h3>
                <p class="text-gray-800 font-semibold">Q. 법인 통장에서 증빙 없이 돈을 인출하면 어떻게 되나요?</p>
                <p class="mt-2 text-gray-700">A. 이는 '가지급금'으로, 세법상 대표이사가 회사 돈을 빌려간 것으로 봅니다. 이 경우, 회사는 대표이사에게 연 4.6%의 이자를 받은 것으로 간주하여 법인세를 내야 하고, 대표이사는 이자만큼 상여를 받은 것으로 보아 소득세를 내야 하는 등 큰 불이익이 따르므로 절대 금물입니다.</p>
                <button class="mt-6 bg-gray-200 px-4 py-2 rounded-lg" onclick="closeAllModals()">닫기</button>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Chart.js - Tax Rate Comparison
            const taxRateCtx = document.getElementById('taxRateChart').getContext('2d');
            new Chart(taxRateCtx, {
                type: 'bar',
                data: {
                    labels: ['2억 이하', '2억 초과 ~ 200억 이하', '200억 초과'],
                    datasets: [{
                        label: '법인세율',
                        data: [9, 19, 21],
                        backgroundColor: '#0B726C',
                        borderColor: '#0A5F5A',
                        borderWidth: 1
                    }, {
                        label: '개인 소득세율 (최고세율 구간)',
                        data: [40, 42, 45],
                        backgroundColor: '#FFB74D',
                        borderColor: '#FFA726',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: false,
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: '세율 (%)'
                            }
                        },
                        x: {
                             title: {
                                display: true,
                                text: '과세표준'
                            }
                        }
                    }
                }
            });

            // Chart.js - Holding Tax Comparison
            const holdingTaxCtx = document.getElementById('holdingTaxChart').getContext('2d');
            new Chart(holdingTaxCtx, {
                type: 'bar',
                data: {
                    labels: ['공시가 10억 주택', '공시가 20억 주택'],
                    datasets: [{
                        label: '개인 종부세 (1주택자 가정)',
                        data: [0, 273], // 11억 공제
                        backgroundColor: '#FFB74D',
                    }, {
                        label: '법인 종부세',
                        data: [3000, 6000], // 10억*3%, 20억*3% (단일세율, 공제없음)
                        backgroundColor: '#D32F2F',
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                         tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': 약 ' + context.raw.toLocaleString() + '만원';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: '연간 예상 세액 (만원)'
                            }
                        }
                    }
                }
            });

            // Navbar Active Link Styling on Scroll
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href').substring(1) === entry.target.id) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, { rootMargin: '-50% 0px -50% 0px' });

            sections.forEach(section => {
                observer.observe(section);
            });
            
             // Smooth scroll for nav links
            navLinks.forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

        });

        // Modal Controls
        function openModal(modalId) {
            closeAllModals();
            const modal = document.getElementById(modalId);
            if(modal) {
                modal.classList.add('show');
            }
        }

        function closeAllModals() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('show');
            });
        }
    </script>

</body>
</html>
