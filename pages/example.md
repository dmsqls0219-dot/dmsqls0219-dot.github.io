---
title: '블로그 시작하기'
date: 2025-01-26
tags: ['JavaScript', 'GitHub Pages', 'Web']
category: 'Development'
description: 'GitHub Pages로 만드는 나만의 블로그'
---

# 블로그 시작하기

이 블로그는 **Vanilla JavaScript**와 **GitHub Pages**를 사용하여 만들어졌습니다. 별도의 프레임워크나 정적 사이트 생성기 없이 순수 웹 기술로 구현되었습니다.

## 주요 기능

### 1. 마크다운 기반 포스팅

모든 게시글은 마크다운으로 작성됩니다. Front Matter를 사용하여 메타데이터를 관리할 수 있습니다.

```markdown
---
title: '게시글 제목'
date: 2025-01-26
tags: ['JavaScript', 'Web']
category: 'Development'
---

# 내용 시작
```

### 2. 코드 하이라이팅

Prism.js를 통해 다양한 언어의 코드를 아름답게 표현할 수 있습니다.

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

### 3. 다크/라이트 모드

오른쪽 상단의 토글 버튼으로 테마를 변경할 수 있습니다. 선택한 테마는 로컬 스토리지에 저장됩니다.

### 4. 검색 및 필터링

- **검색**: 제목, 내용, 태그로 게시글을 검색할 수 있습니다
- **태그 필터**: 특정 태그로 게시글을 필터링할 수 있습니다

### 5. 댓글 시스템

Giscus를 사용하여 GitHub Discussions 기반 댓글 시스템을 제공합니다.

## 블로그 작성 방법

### 새 게시글 작성

1. `pages/` 폴더에 `.md` 파일 생성
2. Front Matter 작성
3. 마크다운으로 본문 작성
4. Git push

```bash
# 예시
git add pages/my-new-post.md
git commit -m "feat: 새 게시글 추가"
git push origin main
```

GitHub Actions가 자동으로 `posts.json`을 생성하고 배포합니다.

## 기술 스택

- **마크다운 파싱**: [marked.js](https://marked.js.org/)
- **코드 하이라이팅**: [Prism.js](https://prismjs.com/)
- **댓글**: [Giscus](https://giscus.app/)
- **배포**: GitHub Actions + GitHub Pages

## 타이포그래피

이 블로그는 **미니멀한 타이포그래피**를 중심으로 디자인되었습니다.

### 강조

**볼드 텍스트**와 *이탤릭 텍스트*를 사용할 수 있습니다.

### 인용

> "좋은 디자인은 가능한 한 적은 디자인이다."
> 
> — Dieter Rams

### 리스트

**순서 있는 리스트:**

1. 첫 번째 항목
2. 두 번째 항목
3. 세 번째 항목

**순서 없는 리스트:**

- HTML
- CSS
- JavaScript

### 표

| 언어       | 용도           | 난이도 |
|-----------|---------------|-------|
| JavaScript| 프론트엔드/백엔드 | 중    |
| Python    | 데이터/백엔드    | 하    |
| Rust      | 시스템 프로그래밍 | 상    |

## 링크

[GitHub 저장소](https://github.com/dmsqls0219-dot/dmsqls0219-dot.github.io)에서 소스 코드를 확인할 수 있습니다.

## 마치며

이제 블로그를 자유롭게 커스터마이징하고 글을 작성할 수 있습니다. 즐거운 블로깅 되세요! 🚀

