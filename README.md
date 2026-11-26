# U.C. ARCHIVE

건담 우주세기의 10개 시대와 주요 애니메이션 14편을 탐색하는 한국어 인터랙티브 페이지입니다.

## 로컬 실행

```sh
cd /Users/samsunglife/Desktop/gundam/uc-archive
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

브라우저에서 http://127.0.0.1:4173 을 여세요. 별도 빌드나 패키지 설치가 필요 없습니다.

## 구성

- `dist/index.html`: 페이지 구조
- `dist/style.css`: 반응형 디자인과 모션
- `dist/app.js`: 작품/연표 데이터, 검색, 필터, 상세창, Canvas 별빛
- `dist/assets/gundam.svg`: 직접 제작한 공통 건담 팬 아트
- `.openai/hosting.json`: Sites 배포 설정

연도 선택은 URL의 `era` 파라미터에 유지됩니다. 왼쪽/오른쪽 방향키로 시대를 이동하고 `/` 키로 검색을 시작할 수 있습니다. Escape 키는 상세창을 닫습니다. 모션 설정은 브라우저에 저장되며 운영체제의 동작 줄이기 설정을 존중합니다. Google Fonts 연결이 없으면 시스템 글꼴로 표시됩니다.

주요 애니메이션을 추린 비공식 팬 가이드이며 모든 우주세기 작품을 망라하지 않습니다. 카드 이미지는 작품별 공식 이미지가 아닌 공통 팬 아트입니다. 썬더볼트의 독자적 설정과 0080의 시기 범위를 작품 정보에 표기했습니다. 섬광의 하사웨이 항목은 2021년 첫 극장판 기준입니다.

참고: [Bandai 공식 우주세기 연표](https://satellite.bandai-hobby.net/For_Oversea_Customer/images/pdf/GNC_web_0411_12M.pdf), [Gundam 공식 작품 안내](https://en.gundam-official.com/).

검증: 데스크톱/모바일 Chrome에서 연도 전환, 14개 작품, 형식별 필터, 검색과 초기화, 정렬, 상세창, 입문 가이드, 모션 저장, 동작 줄이기, 모바일 가로 넘침 및 JavaScript 오류를 확인했습니다.
