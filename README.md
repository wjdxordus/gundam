# U.C. ARCHIVE

건담 우주세기의 10개 시대, 주요 사건 40개, 애니메이션 14편과 주요 기체 45종을 연결하는 한국어 인터랙티브 아카이브입니다.

## Railway 배포

이 저장소의 루트에 `Dockerfile`과 `railway.json`이 있습니다. 별도의 빌드 명령이나 패키지 설치 없이 Node.js 24로 정적 파일을 제공합니다.

1. Railway에서 **New Project → Deploy from GitHub repo**를 선택합니다.
2. `wjdxordus/gundam` 저장소의 `main` 브랜치를 연결합니다.
3. Root Directory는 저장소 루트(`/`)로 둡니다. 로컬 폴더명인 `uc-archive`를 입력하지 않습니다.
4. Dockerfile이 자동으로 감지됩니다. Build Command와 Start Command는 별도로 덮어쓰지 않습니다.
5. 배포 성공 후 **Settings → Networking → Generate Domain**으로 주소를 만듭니다.

`PORT`는 Railway가 제공한 값을 사용하고 서버는 `0.0.0.0`에서 수신합니다. 별도 API 키, 데이터베이스, 볼륨은 필요 없습니다. `/health`가 HTTP 200을 반환해야 새 배포가 활성화됩니다. 이후 `main`에 푸시하면 GitHub 자동 배포로 반영할 수 있습니다.

Railway에서 생성하는 웹 주소에는 이 앱 자체의 로그인 제한이 없습니다. 기존 ChatGPT Sites의 본인 전용 접근 설정은 Railway로 이전되지 않습니다.

설정 근거: [Railway Dockerfile](https://docs.railway.com/builds/dockerfiles), [Healthchecks](https://docs.railway.com/deployments/healthchecks), [GitHub 자동 배포](https://docs.railway.com/deployments/github-autodeploys).

## 로컬 실행

Node.js 24가 필요합니다. 외부 npm 의존성이 없어 `npm install`은 필요하지 않습니다.

```sh
git clone https://github.com/wjdxordus/gundam.git
cd gundam
npm start
```

http://localhost:3000 에서 확인합니다. `PORT=4173 npm start`처럼 포트를 바꿀 수 있습니다.

```sh
npm run check
npm test
```

Docker에서도 동일한 서버를 실행할 수 있습니다.

```sh
docker build -t uc-archive .
docker run --rm -p 3000:3000 uc-archive
```

## 구성

- `dist/index.html`: 페이지 구조
- `dist/style.css`: 반응형 디자인과 모션
- `dist/app.js`: 작품/기본 연표, 작품 검색, 모션, 탐색 이력을 지원하는 상세창
- `dist/archive-data.js`: 시대별 배경·사건·결과·세력, 기체 45종, 작품 해설, 용어 10개와 출처
- `dist/archive.js`: 상세 연표, 기체 검색/필터/더 보기, 작품·기체 간 연결, 용어 사전
- `dist/assets/gundam.svg`: 직접 제작한 공통 건담 팬 아트
- `server.mjs`: Railway용 정적 파일 서버, PORT 처리, 상태 확인, 종료 처리
- `Dockerfile` / `railway.json`: Railway 컨테이너 배포 설정
- `tests/server.test.mjs`: HTTP 응답·파일 제공·경로 접근·종료 검증
- `.openai/hosting.json`: 기존 Sites 배포 식별 정보 (Railway 이미지에는 포함하지 않음)

연도 선택은 URL의 `era` 파라미터에 유지됩니다. 왼쪽/오른쪽 방향키로 시대를 이동하고 `/` 키로 검색을 시작할 수 있습니다. Escape 키는 상세창을 닫습니다. 모션 설정은 브라우저에 저장되며 운영체제의 동작 줄이기 설정을 존중합니다. Google Fonts 연결이 없으면 시스템 글꼴로 표시됩니다.

주요 애니메이션을 추린 비공식 팬 가이드이며 모든 우주세기 작품을 망라하지 않습니다. 카드 이미지는 작품별 공식 이미지가 아닌 공통 팬 아트입니다. 썬더볼트의 독자적 설정과 0080의 시기 범위를 작품 정보에 표기했습니다. 섬광의 하사웨이 항목은 2021년 첫 극장판 기준입니다.

참고: [Bandai 공식 우주세기 연표](https://satellite.bandai-hobby.net/For_Oversea_Customer/images/pdf/GNC_web_0411_12M.pdf), [Gundam 공식 작품 안내](https://en.gundam-official.com/).

검증: 데스크톱/모바일 Chrome에서 연도 전환, 14개 작품, 형식별 필터, 검색과 초기화, 정렬, 상세창, 입문 가이드, 모션 저장, 동작 줄이기, 모바일 가로 넘침 및 JavaScript 오류를 확인했습니다.


## 상세 콘텐츠와 기체 도감

- 전쟁 이전의 우주 이주와 지온의 성립 배경을 별도 섹션에서 설명합니다.
- 각 시대에는 배경 설명, 4개의 주요 사건, 세력별 목적, 다음 시대와의 관계가 있습니다. 결과와 결말은 기본적으로 접혀 있습니다.
- 45개 기체에 형식번호, 주요 탑승자, 소속, 기체 분류, 무장, 특징과 파생형 주의점을 수록했습니다. MS 이외의 모빌 아머·모빌 탱크·복합 병기도 분류를 명시합니다.
- 기체명·형식번호·파일럿·소속 검색과 작품/시대/분류 필터를 함께 사용할 수 있습니다. 뉴건담·크시 등 일부 한글 별칭을 지원합니다.
- 시대에서 관련 기체를 보거나, 작품에서 기체를 열고 다시 작품으로 이동할 수 있습니다. 상세창의 이전 화면 버튼은 탐색 내용과 스크롤을 복원합니다.
- 연표는 애니메이션 중심입니다. Z는 TV판 기준이고, 하사웨이는 2021년 첫 영화 범위입니다. 다른 매체의 결말, 작품별 독자 해석과 파생형을 무조건 합치지 않습니다.
- 읽기 관점은 편집 해설이며, 상세 항목마다 원자료를 확인할 수 있는 링크가 있습니다. 기체 도감은 주요 기체 선별 목록으로 모든 출연·변형을 망라하지 않습니다.

추가 검증: 10개 시대·40개 사건·45개 고유 기체와 작품 관계, 결말 펼치기, 기체 필터 조합, 검색/별칭/초기화, 더 보기, 중첩 상세창의 이전 화면, 모바일 가로 넘침(320–1440px), 기존 검색·모션 기능을 Chrome에서 검증했습니다.
