# 정서 체크리스트 (GitHub Pages)

탭별 체크리스트를 제공하는 정적 웹페이지입니다.

## 구성
- `index.html`: 페이지 구조
- `styles.css`: 탭/체크리스트 스타일
- `app.js`: 탭 렌더링 + 체크 상태 `localStorage` 저장

## GitHub Pages 배포 방법
1. 이 저장소를 GitHub에 push
2. GitHub 저장소 설정 → **Pages**
3. **Build and deployment** 에서
   - Source: **Deploy from a branch**
   - Branch: `main` (또는 현재 브랜치) / `/ (root)`
4. 저장 후 생성된 URL 접속

## 저장 동작
- 체크 상태는 `localStorage`에 저장됩니다.
- 따라서 **같은 브라우저/같은 PC**에서 새로고침해도 유지됩니다.
- 다른 브라우저, 시크릿 모드, 다른 기기에서는 동기화되지 않습니다.
