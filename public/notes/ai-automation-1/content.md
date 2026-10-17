# AI로 자동화 구현하기 1

사이트에 로그인해 필요한 데이터를 수집하는 자동화를 만들었습니다. 사실 대단한 작업은 아닙니다. 매일 사이트에 접속해 몇 가지 숫자를 확인하고 기록하는 게 전부입니다. 다만 이 단순한 작업도 매일 하려니 꽤 귀찮아서요. 그래서 AI의 도움을 받아 자동화해 보기로 했습니다.

사실 방법을 알고 시작한 건 아닙니다. AI가 시키는 대로 하다 보니 Python부터 Cloudflare, GitHub까지 이것저것 활용하게 됐습니다. 이름은 거창하지만 제가 한 일은 대부분 AI가 알려주는 대로 따라 하는 것이었습니다.

먼저 자동화를 구현하기 위해 해결해야 할 조건은 다섯 가지였습니다.

<div class="note-callout note-callout-notice"><span class="note-callout-icon" aria-hidden="true">!</span><ol><li>인증번호가 필요한 사이트에 로그인해 데이터를 수집한다.</li><li>로그인과 데이터 수집 과정에서 별도로 조작하지 않는다.</li><li>원하는 시간에 언제 어디서나 자동으로 실행된다.</li><li>컴퓨터와 휴대전화를 사용하지 않는 상황에서도 실행된다.</li><li>수집한 데이터를 언제 어디서나 확인한다.</li></ol></div>
<div class="section-header"><span class="section-number">1</span><span class="section-text">사이트 로그인부터 데이터 수집까지 자동화하기</span></div>

먼저 사이트에 접속해 로그인하고, 원하는 데이터를 수집하고 싶었습니다. 매번 사이트에 로그인하고, 메뉴를 찾아 들어가고, 조회 기간을 설정한 다음 결과를 확인하는 과정이 번거롭기도 하고, 또 매일 데이터를 쌓아 놓으면 나중에 꽤 유용하게 활용할 수 있을 거라 생각했습니다. 당장은 숫자 몇 개에 불과하지만, 이게 한 달, 두 달 쌓이면 또 이야기가 달라지니까요.

이런 자동화는 AI를 활용하면 비교적 쉽게 구현할 수 있습니다. 원하는 작업 과정을 설명하면 Python을 활용해 사이트 접속부터 로그인, 데이터 수집까지 이어지는 프로그램을 만들어 줍니다. 요즘 같은 세상에는 코딩을 몰라도 괜찮습니다. AI에게 어떤 작업을 자동화하고 싶은지 구체적으로 설명하고, 실행 과정에서 발생하는 오류를 함께 수정해 나가면 됩니다. 아이디와 비번만으로 접속할 수 있는 사이트라면 말이죠.

<div class="section-header"><span class="section-number">2</span><span class="section-text">인증번호 입력까지 사람의 개입 없애기</span></div>

그런데 문제가 하나 있었습니다. 접속하는 사이트에 로그인하기 위해서는 전화번호와 인증번호를 입력해야 한다는 것이었습니다. 인증번호를 입력하는 과정을 해결하지 못한다면 자동화 프로그램을 아무리 잘 만들어도 매번 사람이 개입해야 합니다. 자동화라고 해 놓고 인증번호가 올 때마다 휴대전화를 들여다볼 수는 없는 노릇이니까요.

여기서 AI가 제안한 것이 아이폰의 ‘단축어’ 앱입니다. ‘단축어’ 앱에는 특정 조건이 충족되면 미리 설정해 둔 작업을 실행하는 자동화가 있고, 지정한 발신자나 특정 문구가 포함된 메시지를 수신했을 때 실행되도록 설정할 수 있습니다. 이를 이용하면 인증 문자가 도착했을 때 문자 내용을 가져와 다른 곳으로 전달할 수 있습니다.

<figure id="sentence-map" class="sentence-map" aria-label="문자 자동화 조건과 실제 설정의 연결">
<div class="sentence-map-inner">
<span class="map-term map-sender">지정한 발신자</span><span class="map-join map-or">나&nbsp;</span><span class="map-term map-message">특정 문구가 포함된 메시지</span><span class="map-join map-when">를 수신했을 때&nbsp;</span><span class="map-term map-action">미리 설정해 둔 작업을 실행</span>
<span class="map-detail map-sender-detail">인증번호가 오는<br>전화번호</span><span class="map-detail map-message-detail">인증번호</span><span class="map-detail map-action-detail">메시지 내용을 가져와<br>다른 곳으로 전달</span>
</div>
</figure>

![아이폰 단축어의 메시지 수신 조건과 텍스트 전달 설정](/edit-space/notes/ai-automation-1/images/shortcuts-setup.png)

단축어만 활용한다고 끝이 아닙니다. 아이폰 단축어 앱과 Python은 서로 다른 환경에 있기 때문에, 아이폰이 읽은 인증번호를 Python이 바로 사용할 수 없습니다. 서로 다른 환경에서 작동하니 중간에서 정보를 전달해 줄 무언가가 필요하죠. AI는 두 환경을 연결하는 방법으로 Cloudflare Workers를 제안했습니다.

Cloudflare Workers는 별도의 서버 컴퓨터를 직접 운영하지 않아도 인터넷에서 간단한 프로그램을 실행할 수 있는 서비스입니다. 아이폰과 Python 사이의 중간 통로인 것입니다.

지금까지 구성은 다음과 같습니다.

<div class="note-callout note-callout-check"><span class="note-callout-icon" aria-hidden="true">✓</span><ol><li>아이폰에 인증 문자가 도착한다.</li><li>아이폰 단축어에서 문자 내용을 Cloudflare Workers로 전송한다.</li><li>Python에서 전달된 인증번호를 확인해 로그인에 사용한다.</li></ol></div>
이렇게 인증 문자가 도착하면 아이폰이 이를 감지하고, Cloudflare를 거쳐 자동화 프로그램에 인증번호가 전달되는 구조를 완성했습니다. 사람이 문자를 확인하거나 인증번호를 입력하지 않아도 로그인 과정을 이어갈 수 있게 된 것입니다.

<div class="section-header"><span class="section-number">3</span><span class="section-text">원하는 시간에 언제 어디서나 실행하기</span></div>

로그인 문제를 해결했으니 이제 프로그램을 자동으로 실행할 차례입니다. 매일 컴퓨터를 켜고 프로그램을 실행해야 한다면 굳이 자동화할 이유가 없겠죠. 특정 시간에 알아서 실행되고, 필요할 때는 직접 실행할 수도 있었으면 했습니다.

AI가 추천한 것은 **GitHub Actions**였습니다. GitHub는 프로그램 코드를 저장하고 관리하는 서비스입니다. 그리고 GitHub Actions는 저장된 프로그램을 정해진 시간이나 특정 조건에 따라 실행해 주는 기능입니다. AI의 도움을 받아 앞서 만든 Python 프로그램을 GitHub에 올리고, 원하는 시간에 실행되도록 설정했습니다.

예를 들어 매일 오전 9시에 데이터를 수집하도록 설정했다고 가정해 보겠습니다.

<div class="note-callout note-callout-check"><span class="note-callout-icon" aria-hidden="true">✓</span><ol><li>해당 시간이 되면 GitHub Actions가 Python을 실행한다.</li><li>Python이 사이트에 접속해 로그인을 시도한다.</li><li>아이폰 단축어와 Cloudflare Workers를 통해 인증번호를 확인한다.</li><li>인증번호를 입력하고 로그인을 완료한다.</li><li>데이터 페이지에서 필요한 데이터를 수집하고 저장한다.</li></ol></div>
이제 프로그램을 실행하기 위해 제가 따로 할 일은 없습니다. 정해진 시간이 되면 알아서 실행되고, 수집이 끝나면 작업도 종료됩니다. 이렇게 각각 따로 작동하던 기능들이 하나의 자동화 과정으로 연결된 셈입니다.

<div class="section-header"><span class="section-number">4</span><span class="section-text">컴퓨터와 휴대전화를 사용하지 않는 상황에서도 실행하기</span></div>

앞서 GitHub Actions와 Cloudflare Workers를 활용하면서 이 조건도 해결할 수 있었습니다. 핵심은 **두 서비스 모두 제 컴퓨터가 아닌 외부 클라우드 서버에서 작동한다는 점**입니다. 보통 컴퓨터에서 프로그램을 실행하면 컴퓨터가 꺼지는 순간 작업도 중단됩니다. 그런데 GitHub Actions는 GitHub에서 제공하는 서버에서 프로그램을 실행합니다. Cloudflare Workers 역시 Cloudflare의 서버에서 작동하고요. 덕분에 별도의 서버 컴퓨터를 마련하거나 제 컴퓨터를 계속 켜둘 필요가 없었습니다. 쉽게 말해 제 컴퓨터가 해야 할 일을 외부 서버에 맡긴 것입니다.

휴대전화 역시 직접 조작하지 않아도 되도록 구성했습니다. 아이폰 단축어는 설정에 따라 잠금 화면을 해제하지 않고도 자동으로 실행할 수 있습니다. 인증 문자가 도착하면 잠긴 상태에서도 단축어가 실행되고, Cloudflare Workers를 거쳐 Python 프로그램에 인증번호가 전달됩니다. 아이폰은 켜져 있어야 하지만, 굳이 잠금을 풀고 인증번호를 확인할 필요는 없습니다.

결과적으로 컴퓨터를 켜두거나 아이폰의 잠금을 해제하지 않아도 자동화가 진행되는 환경을 만들었습니다. 잠을 자고 있거나 다른 일을 하는 동안에도 프로그램은 정해진 시간에 실행됩니다. 이제 인증번호가 도착해도 제가 할 일은 없습니다. 오히려 문자가 왔는지도 모르고 지나갈 때가 더 많겠습니다.

<div class="section-header"><span class="section-number">5</span><span class="section-text">수집한 데이터를 언제 어디서나 확인하기</span></div>

마지막으로 수집한 데이터를 언제 어디서나 확인할 수 있는 환경이 필요했습니다. 엑셀 파일이나 구글 스프레드시트가 아니라, 그동안 쌓인 데이터를 한눈에 살펴보고 변화도 쉽게 파악할 수 있는 공간을 만들고 싶었습니다.

이 부분은 챗GPT의 사이트 제작 기능을 활용해, 수집한 데이터를 보여주는 웹사이트를 만들어 해결했습니다. 어떤 데이터를 보여줄지, 화면을 어떻게 구성할지, 어떤 기능이 필요한지 AI에 설명하면서 하나씩 구현했습니다. 날짜별로 데이터를 조회하거나 기간에 따른 변화를 비교할 수 있도록 구성했고, 필요한 정보가 한눈에 들어오도록 화면도 수정했습니다.

![수집한 판매량을 조회하는 대시보드 화면](/edit-space/notes/ai-automation-1/images/dashboard.png)

웹사이트로 만들면서 가장 편리했던 점은 컴퓨터나 휴대전화에 별도의 프로그램을 설치할 필요가 없다는 것이었습니다. 인터넷에 접속할 수 있다면 언제 어디서든 같은 주소로 들어가 데이터를 확인할 수 있습니다. 모바일에서도 보기 편하도록 화면을 구성했고, 동료들도 같은 데이터를 확인할 수 있도록 했습니다.

<div class="section-header"><span class="section-number">6</span><span class="section-text">마무리</span></div>

이번 작업에서 가장 흥미로웠던 건 코딩이나 서버에 대한 전문적인 지식이 없어도 여기까지 만들 수 있었다는 점입니다. 물론 AI가 알려주는 대로 따라 했다고 모든 게 한 번에 해결된 건 아닙니다. 오류도 있었고, 잘되던 기능이 갑자기 작동하지 않아 다시 수정하기도 했습니다. 그래도 문제가 생길 때마다 AI에 물어보고 하나씩 해결하다 보니 처음 생각했던 것보다 제법 그럴듯한 결과물이 나왔습니다.

데이터 몇 개 편하게 보려다가 일이 꽤 커졌네요. 그래도 이제는 제가 직접 확인하지 않아도 데이터가 차곡차곡 쌓이고 있으니, 당분간은 잘 만든 자동화 하나 덕을 볼 수 있을 것 같습니다.
