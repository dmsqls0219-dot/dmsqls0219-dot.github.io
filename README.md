# dmsqls0219-dot's Blog

[![Deploy](https://github.com/dmsqls0219-dot/dmsqls0219-dot.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/dmsqls0219-dot/dmsqls0219-dot.github.io/actions/workflows/deploy.yml)

미니멀한 타이포그래피 중심의 개인 블로그입니다. Vanilla JavaScript로 구현되었으며 GitHub Pages로 배포됩니다.

🔗 **Live Demo**: https://dmsqls0219-dot.github.io

## ✨ 주요 기능

- 📝 **마크다운 기반 포스팅** - Front Matter 지원
- 🎨 **다크/라이트 모드** - 시스템 설정 자동 감지
- 🔍 **검색 및 필터링** - 실시간 클라이언트 사이드 검색
- 💬 **Giscus 댓글** - GitHub Discussions 연동
- 🎯 **코드 하이라이팅** - Prism.js 적용
- 📱 **완전 반응형** - 모바일 최적화
- ⚡ **빠른 로딩** - 정적 사이트, CDN 활용
- 🤖 **자동 배포** - GitHub Actions 워크플로우

## 🛠️ 기술 스택

- **HTML/CSS/JavaScript** - 순수 웹 기술
- **marked.js** - 마크다운 → HTML 변환
- **Prism.js** - 코드 신택스 하이라이팅
- **Giscus** - 댓글 시스템
- **GitHub Actions** - 자동 빌드 및 배포
- **GitHub Pages** - 호스팅

## 📁 프로젝트 구조

```
/
├── .nojekyll              # Jekyll 비활성화 (필수!)
├── index.html             # 메인 페이지 (게시글 목록)
├── post.html              # 게시글 상세 페이지
├── posts.json             # 게시글 메타데이터 (자동 생성)
├── css/
│   └── style.css          # 메인 스타일시트
├── js/
│   ├── app.js             # 메인 앱 로직
│   ├── post-loader.js     # 마크다운 파싱 및 렌더링
│   ├── search.js          # 검색 기능
│   └── theme.js           # 다크/라이트 모드
├── pages/                 # 마크다운 게시글 저장
│   └── example.md
├── .github/
│   ├── workflows/
│   │   └── deploy.yml     # GitHub Pages 배포 워크플로우
│   └── scripts/
│       └── generate-posts.js  # posts.json 생성 스크립트
└── README.md
```

## 🚀 시작하기

### 1. 저장소 생성

이 저장소를 `{your-username}.github.io` 이름으로 포크 또는 템플릿으로 사용하세요.

### 2. GitHub Pages 설정

1. 저장소 **Settings** → **Pages**
2. **Source**: GitHub Actions 선택
3. 저장

### 3. Giscus 설정 (선택사항)

댓글 기능을 사용하려면 아래 단계를 따르세요:

#### 3.1 GitHub Discussions 활성화

1. 저장소 **Settings** → **General** → **Features**
2. **Discussions** 체크박스 활성화

#### 3.2 Giscus 앱 설치

1. https://github.com/apps/giscus 접속
2. **Install** 클릭
3. 저장소 선택 후 설치

#### 3.3 Giscus 설정

1. https://giscus.app/ko 접속
2. 저장소 입력: `dmsqls0219-dot/dmsqls0219-dot.github.io`
3. 설정:
   - **매핑**: `pathname`
   - **카테고리**: `General` 또는 원하는 카테고리
   - **테마**: `preferred_color_scheme`
4. 생성된 코드에서 `data-repo-id`와 `data-category-id` 복사

#### 3.4 블로그 코드 수정

`js/post-loader.js` 파일에서 다음 부분을 수정:

```javascript
script.setAttribute('data-repo-id', 'YOUR_REPO_ID'); // 실제 ID로 교체
script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID'); // 실제 ID로 교체
```

#### 3.5 변경사항 커밋

```bash
git add js/post-loader.js
git commit -m "feat: Giscus 댓글 시스템 설정"
git push origin main
```

### 4. 첫 게시글 작성

`pages/` 폴더에 `.md` 파일을 생성하세요:

```markdown
---
title: '내 첫 게시글'
date: 2025-01-26
tags: ['JavaScript', 'Web']
category: 'Development'
description: '게시글 설명'
---

# 제목

내용을 여기에 작성하세요.
```

### 5. 배포

```bash
git add pages/my-first-post.md
git commit -m "feat: 첫 게시글 추가"
git push origin main
```

GitHub Actions가 자동으로 배포합니다. 약 1-2분 후 https://dmsqls0219-dot.github.io 에서 확인할 수 있습니다.

## 📝 게시글 작성 가이드

### Front Matter 형식

모든 게시글은 Front Matter로 시작해야 합니다:

```markdown
---
title: '게시글 제목'           # 필수
date: 2025-01-26              # 필수 (YYYY-MM-DD)
tags: ['Tag1', 'Tag2']        # 선택 (배열)
category: 'Development'       # 선택
description: '짧은 설명'       # 선택
---
```

### 지원하는 마크다운 문법

- 제목 (H1-H6)
- 강조 (**볼드**, *이탤릭*)
- 리스트 (순서, 비순서)
- 링크, 이미지
- 코드 블록 (신택스 하이라이팅)
- 인용구
- 표
- 수평선

### 파일명 규칙

- 영문 소문자, 숫자, 하이픈 사용 권장
- 예: `my-first-post.md`, `2025-01-26-hello-world.md`

## 🎨 커스터마이징

### 색상 변경

`css/style.css`의 CSS 변수를 수정하세요:

```css
:root {
  --accent: #2563eb;        /* 강조 색상 */
  --bg-primary: #ffffff;    /* 배경색 */
  --text-primary: #1a1a1a;  /* 텍스트 색상 */
  /* ... */
}
```

### 폰트 변경

`css/style.css`에서 `--font-sans` 변수를 수정하세요:

```css
--font-sans: 'Pretendard', -apple-system, sans-serif;
```

### 레이아웃 너비 조정

```css
--max-width: 720px;  /* 원하는 너비로 변경 */
```

## ⚠️ 중요 사항

### 1. `.nojekyll` 파일 필수

이 파일이 없으면 GitHub Pages가 Jekyll로 빌드를 시도하여 `pages/` 폴더의 파일이 제대로 서빙되지 않습니다.

### 2. `posts.json` Git 커밋

`posts.json`을 `.gitignore`에 추가하지 마세요. GitHub Actions가 매번 덮어쓰므로 충돌 없이 Git에 포함되어야 합니다.

### 3. GitHub Actions 권한

저장소 **Settings** → **Actions** → **General**에서:
- **Workflow permissions**: Read and write permissions 허용

## 🐛 문제 해결

### 게시글이 404 에러

- `.nojekyll` 파일이 있는지 확인
- `pages/` 폴더에 마크다운 파일이 있는지 확인
- GitHub Actions 워크플로우가 성공했는지 확인

### 댓글이 표시되지 않음

- GitHub Discussions가 활성화되어 있는지 확인
- Giscus 앱이 설치되어 있는지 확인
- `data-repo-id`와 `data-category-id`가 올바른지 확인

### 스타일이 적용되지 않음

- 브라우저 캐시 삭제 후 새로고침
- 개발자 도구에서 네트워크 오류 확인

## 📄 라이선스

MIT License - 자유롭게 사용하세요.

## 🙏 감사의 말

- [marked.js](https://marked.js.org/) - 마크다운 파싱
- [Prism.js](https://prismjs.com/) - 코드 하이라이팅
- [Giscus](https://giscus.app/) - 댓글 시스템

---

**즐거운 블로깅 되세요!** 🚀

궁금한 점이 있다면 [Issues](https://github.com/dmsqls0219-dot/dmsqls0219-dot.github.io/issues)에 남겨주세요.

