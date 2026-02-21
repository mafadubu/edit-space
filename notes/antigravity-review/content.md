# 비개발자의 안티그래비티 사용기

안티그래비티로 웹사이트를 만들어 보았습니다. 웹사이트 제작에는 그동안 노션을 많이 활용했습니다. 비개발자 입장에서는 노션이 웹사이트로 활용하기 좋습니다만, 디자인 요소를 적극적으로 추가하기 어려워서 아쉬운 점도 분명했습니다. 반면 안티그래비티는 비개발자가 접근하기 어려웠던 웹사이트의 UI/UX 디자인까지 모두 설계해 볼 수 있다는 점에서 꽤나 매력적으로 다가왔습니다.

이번 글에서는 안티그래비티 사용기를 [기획] – [디자인/개발] – [배포] 3단계로 나누어 정리해 보려고 합니다. 비개발자 입장에서 안티그래비티 사용기를 솔직하게 적어 보겠습니다. 전문적인 개발 리뷰라기보다는, ‘노션을 넘어서 한 번쯤은 나만의 웹사이트를 만들어 보고 싶었던 사람’의 경험담에 가깝습니다. 가볍게 참고용으로 읽어주시면 좋겠습니다.

<div class="section-header"><span class="section-number">1</span><span class="section-text">기획하기</span></div>

기획 단계에서는 먼저 레퍼런스를 찾습니다. 막연히 ‘이런 사이트를 만들고 싶다’고 생각하는 것보다, 구체적인 화면 사례를 기준으로 구조를 정리하는 편이 훨씬 수월했습니다. 이후 이 레퍼런스를 바탕으로 메뉴 구성과 콘텐츠 구조를 정리해 달라고 요청할 수도 있기 때문에, 참고 사이트를 명확히 정해 두는 과정이 중요합니다.

![image.png](/edit-space/notes/antigravity-review/images/image.png)

저는 사이드바에 메뉴를 배치한 레이아웃과 검정 배경에 흰 텍스트를 사용하는 비교적 미니멀한 스타일을 구현하고 싶었습니다. 이를 위해 평소 자주 방문하던 [6699press](https://6699press.kr/)의 홈페이지를 참고했습니다. 전체적인 톤앤매너, 메뉴의 위치, 콘텐츠 레이아웃을 살펴보면서 ‘내 사이트에는 무엇이 필요하고, 무엇은 덜어내도 되는지’를 정리하는 데 큰 도움이 되었습니다.

<div class="section-header"><span class="section-number">2</span><span class="section-text">디자인/개발하기 1</span></div>

안티그래비티에서는 프롬프트에 이미지를 첨부해 레퍼런스로 활용할 수 있습니다. 단순히 텍스트로 '이런 느낌'이라고 설명하는 것보다, 실제 레이아웃이나 디자인 화면을 함께 제공하면 AI가 구조와 스타일을 훨씬 정확하게 이해합니다. 최근 소개 글이나 사용자 리뷰에서도 이미지 기반 입력이 구현 정확도를 높이는 방식으로 언급되고 있습니다.

원하는 웹사이트의 스크린샷이나 참고 이미지를 첨부한 뒤 이를 반영해 달라고 요청하면, 색감과 메뉴 배치, 전반적인 분위기까지 비교적 일관되게 구현됩니다. 비개발자 입장에서는 추상적인 설명에서 생기는 오차를 줄일 수 있다는 점이 특히 편했습니다. 

<span class="step-badge">1</span> '6699press’ 웹사이트의 검정 바탕이나, 왼쪽 메뉴가 배치되는 레이아웃을 참고하고 싶다고 해 보겠습니다.

![SCR-20260220-uqkj.png](/edit-space/notes/antigravity-review/images/SCR-20260220-uqkj.png)

<span class="step-badge">2</span> 안티그래비티가 이미지와 링크를 분석합니다. 미니멀 디자인, 깔끔한 타이포그래피 등의 특징을 바탕으로 웹페이지 제작 계획을 세웠네요. [Proceed]를 눌러 진행합니다. 

![SCR-20260220-uqqs.png](/edit-space/notes/antigravity-review/images/SCR-20260220-uqqs.png)

<span class="step-badge">3</span> 2분만에 초안을 완성했습니다. 

![SCR-20260221-bbos.jpeg](/edit-space/notes/antigravity-review/images/SCR-20260221-bbos.jpeg)

초안에는 실제 내용과는 무관한 더미 데이터가 일부 포함되어 있습니다. 자리만 차지하고 있는 문구나 예시 텍스트는 그대로 두기보다, 필요한 내용으로 교체하거나 삭제하는 것이 좋겠습니다. 이런 수정도 텍스트만으로 충분히 가능합니다.

이제 화면의 큰 구조를 정리했다면, 다음 단계에서는 디테일한 요소들을 하나씩 다듬어 보겠습니다. 문구 톤을 통일하고, 버튼 문구나 메뉴 이름을 실제 목적에 맞게 수정하면서 완성도를 높여보겠습니다.

<div class="section-header"><span class="section-number">3</span><span class="section-text">디자인/개발하기 2</span></div>

안티그래비티가 자동 생성 과정에서 채워 넣은 기본 예시 요소들을 정리해 보겠습니다. 화면을 구성하기 위한 임시 문구와 섹션들이 포함되어 있는데, 실제 운영 목적에 맞지 않는 부분은 직접 손보는 과정이 필요합니다. <span class="tip-container" tabindex="0"><span class="tip-badge">Tip</span><span class="tip-content"><span>참고로 안티그래비티는 사용자의 컴퓨터에서 클릭, 스크롤, 입력, 콘솔 로그 읽기 등 브라우저를 제어하는 데 필요한 다양한 도구에 액세스할 수 있습니다. 수정을 요청하면 웹사이트가 열리고, 다음과 같이 ‘Agent needs your input’이라는 알림이 나올 때가 있습니다. 이 때 안티그래비티에서 [Allow]를 눌러 주어야 다음 단계로 진행할 수 있습니다.</span><span class="image-grid"><img src="/edit-space/notes/antigravity-review/images/SCR-20260221-bwkj.png" alt="SCR-20260221-bwkj.png"><img src="/edit-space/notes/antigravity-review/images/image%201.png" alt="image.png"></span><span>웹사이트가 자동으로 열리는 것은 <strong>‘DOM 캡처’</strong> 기능으로, 이는 안티그래비티가 브라우저 내 웹페이지의 구조와 내용을 분석하고 화면을 기록하는 핵심 기능이며, 이는 단순한 이미지 캡처를 넘어 브라우저 디버깅까지 안티그래비티가 스스로 수행할 수 있게 합니다.</span></span></span>

<span class="step-badge">1</span> 수정은 ‘수정하고 싶은 것 + 위치 + 수정 사항’을 적으면 대체로 잘 알아듣는 편입니다. 줄이거나 늘리는 건 ‘약간, 적당히, 가독성 좋게’ 같은 애매모호한 요청도 잘 적용합니다. 

![SCR-20260221-bgdl.png](/edit-space/notes/antigravity-review/images/SCR-20260221-bgdl.png)

<span class="step-badge">2</span> 역시 2분만에 7가지 모두 반영했습니다. 

![image.png](/edit-space/notes/antigravity-review/images/image%202.png)

<span class="step-badge">3</span> 조금 더 어려운 과정들도 요청해 보겠습니다. 요청 사항에는 ‘더 보기 좋게’, ‘마우스 커서를 올리면 → 뱅글뱅글 돌아 갔으면 좋겠어’와 같이 수치나, 용어를 전혀 사용하지 않았습니다. 근데 오히려 이런 것이 ‘바이브 코딩스러워서’ 좋네요. 이게 바로 (비)개발 언어죠. 

![SCR-20260221-bkug.png](/edit-space/notes/antigravity-review/images/SCR-20260221-bkug.png)

<span class="step-badge">4</span> 요청한 것들은 우선 반영이 되었네요. 책 사이 간격이나, 뒤표지가 먼저 보이는 문제 등도 텍스트 요청만으로 쉽게 해결할 수 있습니다. 

![화면 기록 2026-02-21 오전 12.35.23.gif](/edit-space/notes/antigravity-review/images/demo.gif)

<span class="step-badge">5</span> 참고로 이렇게 감정에 호소하는 느낌으로도 수정할 수 있습니다. 

![SCR-20260221-bvho.png](/edit-space/notes/antigravity-review/images/SCR-20260221-bvho.png)


이렇게 안티그래비티를 활용해 디테일들을 추가하며 홈페이지를 완성할 수 있습니다. 

<div class="section-header"><span class="section-number">4</span><span class="section-text">배포하기</span></div>

홈페이지를 완성했다면 이제 실제로 배포해 볼 차례입니다. 개인 포트폴리오 용도라면 굳이 도메인을 바로 구입하지 않아도 됩니다. 간단하게는 GitHub에 업로드해 정적 페이지로 배포하는 방법만으로도 충분합니다. 물론 저장소 이름이나 주소가 그대로 URL에 노출되기 때문에, 저처럼 ‘mafadubu’ 같은 요상한 이름을 넣는 부끄러운 짓을 하지 않으면 더 좋겠습니다.

<span class="step-badge">1</span> 일단 깃허브에 로그인합니다. 처음이시라고요? 네 걱정하지 마세요. 그냥 안티그래비티에 깃허브 페이지 캡쳐해서 ‘만든 페이지를 배포하고 싶은데, 어떻게 해야 해?’라고 물어보면 뭐 클릭해야 하는지 다 알려줍니다. 

![image.png](/edit-space/notes/antigravity-review/images/image%203.png)

<span class="step-badge">2</span> 고마워서 눈물이 날 지경입니다. 진짜 그대로 따라 하면 됩니다. 그리고 하다가 막힐 때는 또 캡쳐해서 모르겠다고 징징대 보세요. 

![image.png](/edit-space/notes/antigravity-review/images/image%204.png)

이렇게 [기획] – [디자인/개발] – [배포]의 흐름으로 전체 과정을 아주 가볍게 훑어 보았습니다. 엄밀히 말하면 QA 단계가 빠져 있지만, 저희 같은 비개발자 상남자, 상여자들은 보통 ‘QA’를 배포 이후에 합니다. 물론 각 단계마다 다양한 방법이 연구되고 있습니다만, 이번에는 어디까지나 ‘사용기’ 정도로 참고해 주세요. <span class="tip-container" tabindex="0"><span class="tip-badge">Tip</span><span class="tip-content"><span>참고로 깃허브에서 배포하게 되면 주소가 ‘아이디.github.io/저장소명’ 형식이라 다소 길고, 덜 전문적으로 보일 수 있습니다. 이 때 주소를 바꾸고 싶다면 가비아, 호스팅 등 사이트에서 도메인을 구입해야 합니다.</span></span></span>