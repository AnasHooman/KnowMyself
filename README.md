# KnowMyself

나를 알아가는 심리 퀴즈 사이트. 한국어 · English · 日本語 · 中文.

**Live:** https://anashooman.github.io/KnowMyself/

## 퀴즈

| ID | 제목 | 결과 유형 |
|---|---|---|
| `energy` | 나의 에너지 충전 방식 | 고요한 숲 · 축제의 불꽃 · 탐험가의 바람 · 아늑한 등불 |
| `role` | 관계 속 나의 역할 | 나침반 · 다리 · 웃음 발전소 · 숨은 전략가 |
| `values` | 나를 움직이는 핵심 가치 | 성장 · 안정 · 자유 · 연결 |

각 퀴즈는 7문항, 가장 많이 고른 유형이 결과가 됩니다. 결과 페이지는 공유 링크로 열면 "친구가 공유한 결과" 모드로 보입니다.

## 개발

```bash
npm install
npm run dev        # http://localhost:3000/ko
npm run build      # 정적 파일을 out/ 에 생성
```

- Next.js 15 (App Router, `output: "export"`) + Tailwind CSS 4 + next-intl
- 퀴즈 내용: `src/data/quizzes.ts` (ko/en 작성, ja/zh는 en으로 대체)
- 화면 문구: `messages/*.json`
- `main` 브랜치에 push하면 GitHub Actions가 GitHub Pages로 배포합니다 (`.github/workflows/deploy.yml`).

## 다음 할 일

- 퀴즈 내용 ja/zh 번역
- 결과 이미지 카드(OG 이미지) 생성
- Firebase 연결(결과 저장, 통계) — `src/lib/firebase.ts`와 `.env.example` 참고
