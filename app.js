const STORAGE_KEY = 'emotion_checklist_v1';

const data = [
  {
    title: '외부/내부 발산자',
    sections: [
      {
        title: '외부 발산자의 특성',
        items: [
          '지금 이 순간만 생각하며 살면서 미래에 생길 결과는 고려하지 않는다.',
          '외부에서 해결책을 제공해줄 것이라고 생각한다.',
          '다른 사람들이 상황을 개선해주기를 바란다. "상황을 개선하려면 누가 무엇을 해야할까?"',
          '곧바로 행동을 취하고 생각은 나중에 한다.',
          '힘든 상황을 과소평가한다.'
        ]
      },
      {
        title: '문제 대응 방식',
        items: [
          '지금 일어나고 있는 일에 반응한다.',
          '다른 사람의 잘못 때문에 문제가 발생했다고 여기며 주위 환경을 탓한다.',
          '자기 문제에 다른 사람들을 끌어들인다.',
          '기분이 좋아지려고 현실을 부정하거나 도피한다.'
        ]
      },
      {
        title: '심리 스타일',
        items: [
          '충동적이고 자기중심적이다.',
          '본인의 감정은 매우 특별하다고 생각한다.',
          '쉽게 화를 낸다.',
          '내면의 심리 세계에 관심이 없다.'
        ]
      },
      {
        title: '관계 스타일',
        items: [
          '다른 사람들이 도와주기를 기대한다.',
          '상황을 개선하기 위해서는 다른 사람이 바뀌어야 한다고 생각한다.',
          '자신의 독백에 다른 사람들이 귀를 기울이고 상황에 개입해 주기를 기대한다.',
          '다른 사람들에게 "잔소리"를 멈추라고 요구한다.'
        ]
      },
      {
        title: '내부 발산자의 특성 - 삶에 접근하는 방식',
        items: [
          '미래를 걱정한다.',
          '해결책에 대한 고민이 자기 마음속에서부터 시작된다.',
          '사려 깊고 공감 능력이 있다. "상황을 개선하기 위해 내가 할 수 있는 일은 무엇일까?"',
          '벌어질 수 있는 일들에 대해 생각한다.',
          '힘든 상황을 과대평가한다.'
        ]
      },
      {
        title: '내부 발산자의 특성 - 문제 대응 방식',
        items: [
          '무슨 일이 벌어지고 있는지 알아내려고 애쓴다.',
          '본인이 문제 발생과 관련해 어떤 역할을 했는지 알아본다. "여기에서 내가 한 역할은 무엇인가?"',
          '자기반성을 하고 책임을 진다.',
          '독자적으로 문제를 이해하고 해결하려고 노력한다.',
          '있는 그대로의 현실에 대처하면서 변화를 모색한다.'
        ]
      },
      {
        title: '내부 발산자의 특성 - 심리 스타일',
        items: [
          '행동하기 전에 생각부터 한다.',
          '감정을 관리할 수 있다고 믿는다.',
          '쉽게 죄책감을 느낀다.',
          '내면의 심리 세계가 매혹적이라고 여긴다.'
        ]
      },
      {
        title: '내부 발산자의 특성 - 관계 스타일',
        items: [
          '다른 사람들이 필요로 하는 것을 먼저 생각한다.',
          '상황을 개선하기 위해 스스로를 변화하는 것을 우선적으로 고려한다.',
          '문제에 대해 대화를 나누자고 요청한다.',
          '문제가 발생한 이유를 다른 사람들이 이해할 수 있도록 도와주고 싶어한다.'
        ]
      }
    ]
  },
  {
    title: '어린시절 어려움 평가',
    sections: [
      {
        title: '정서적으로 미성숙한 부모 때문에 겪은 어린시절의 어려움 평가',
        items: [
          '부모님이 내 말에 귀 기울여준다는 느낌이 들지 않았다. 부모님의 관심을 거의 받지 못했다.',
          '부모님의 기분이 집 안 전체에 영향을 미쳤다.',
          '우리 부모님은 내 감정을 예민하게 알아차리거나 반응을 보인 적이 없다.',
          '부모님이 말하지 않아도 그들이 무엇을 원하는지 알고 있어야 한다고 느꼈다.',
          '부모님을 행복하게 해줄 수 있을 만큼 충분한 성과를 올릴 방법이 없다고 느꼈다.',
          '부모님이 나를 이해하려고 노력하는 것보다 내가 부모님을 이해하려고 더 많이 노력했다.',
          '부모님과는 모든 걸 터놓는 솔직한 의사소통을 하는 게 힘들거나 불가능했다.',
          '부모님이 내 사생활에 끼어들거나 무례하게 행동하는 일이 종종 있었다.',
          '부모님은 내가 너무 예민하고 감정적이라고 생각한다는 걸 항상 느꼈다.',
          '가족 중에서 누가 가장 많은 관심을 받는가 하는 문제에 있어서 우리 부모님은 늘 편파적이었다.',
          '우리 부모님은 내가 하는 말이 마음에 들지 않으면 더 이상 듣지 않으려고 했다.',
          '부모님 주변에 있을 때면 죄책감이나 내가 어리석고 나쁜 사람이라는 부끄러움을 느꼈다.',
          '부모님과 나 사이에 문제가 생겼을 때, 부모님은 사과를 하거나 상황을 개선하려는 노력을 거의 하지 않았다.',
          '종종 부모님에게 울분을 느끼곤 했지만 그걸 표현할 수가 없었다.'
        ]
      }
    ]
  },
  {
    title: '역할 자아/치유 환상',
    sections: [
      {
        title: '개념 정리',
        text: `역할자아: 타고난 적성과 순수한 감정들로 이루어진 어린시절의 자아를 버리고, 가족에게 관심받을 자아를 만들어낸다.\n\n치유환상: 언젠가 원하는 걸 얻게 될 거라는 기대, 환경 변화가 정서적 외로움을 해결해줄 것이라는 희망적 이야기.`
      },
      {
        title: '치유환상 문장 완성',
        items: [
          '다른 사람들이 좀 더 ______ 해주기를 바란다.',
          '사람들이 ______ 하기 힘든 이유는 무엇인가?',
          '때때로 누군가가 나를 ______ 처럼 대해주었으면 좋겠다.',
          '아마 언젠가는 ______ 해줄 사람을 만나게 될 것이다.',
          '선량한 사람들이 사는 이상적인 세상에서는, 다른 사람들이 ______ 할 것이다.'
        ]
      },
      {
        title: '역할자아 문장 완성',
        items: [
          '나는 ______ 하기 위해 열심히 노력했다.',
          '사람들이 나를 좋아하는 가장 큰 이유는 내가 ______ 때문이다.',
          '다른 사람들은 내가 얼마나 ______ 한지 인정해주지 않는다.',
          '나는 늘 ______ 하는 사람이 되어야 한다.',
          '나는 ______ 사람이 되려고 노력했다.'
        ]
      }
    ]
  },
  {
    title: '진정한 자아 vs 역할 자아',
    sections: [
      {
        title: '나의 진정한 자아',
        items: [
          '초등학교 4학년 이전의 나는 어떤 모습이었는가?',
          '당시 나의 관심사는 무엇이었는가?',
          '내가 가장 좋아했던 사람은 누구였고 어떤 점이 좋았는가?',
          '그 시절의 완벽한 하루는 어떤 하루였는가?',
          '기운이 불끈 솟게 만드는 일은 무엇이었는가?'
        ]
      },
      {
        title: '나의 역할 자아',
        items: [
          '남들의 존경과 사랑을 느끼기 위해 나는 어떤 사람이 되어야 했는가?',
          '지금 별로 관심 없는 일들에 관여하고 있는가?',
          '좋은 사람처럼 보이기 위해 억지로 하는 일은 무엇인가?',
          '내 에너지를 고갈시키는 사람은 누구인가?',
          '시간을 쏟지만 지루하게 느껴지는 일은 무엇인가?',
          '내가 하고자 하는 사회적 역할은 무엇인가?',
          '다른 사람들이 나를 어떻게 봐주었으면 하는가?',
          '내 성격 가운데 가리려고 애쓰는 부분은 무엇인가?',
          '나에 대해 아무도 몰랐으면 하는 부분은 무엇인가?'
        ]
      },
      {
        title: '숨겨진 감정 찾기',
        text: '기분이 최악일 때 특정 인물과 연결된 감정이 있는지 떠올려보세요.\n"그 사람이 ______ 할 때 싫었다" 형태로 간단히 적어보세요.'
      }
    ]
  },
  {
    title: '타인 성숙도/관계 방법',
    sections: [
      {
        title: '타인의 정서적 성숙도 평가 - 현실적이고 신뢰할 수 있음',
        items: [
          '현실과 맞서 싸우기보다 협력하려고 한다.',
          '느끼고 생각하는 걸 동시에 할 수 있다.',
          '일관성이 있어서 신뢰도가 높아진다.',
          '감정이 잘 상하지 않는다.'
        ]
      },
      {
        title: '존중과 상호주의',
        items: [
          '상대방을 존중하고 상호적이다.',
          '경계를 존중한다.',
          '받은 만큼 보답한다.',
          '융통성 있고 타협을 잘한다.',
          '성격이 차분하다.',
          '기꺼이 상대의 영향을 받고 싶어한다.',
          '정직하다.',
          '사과하고 보상해준다.'
        ]
      },
      {
        title: '반응성',
        items: [
          '공감 능력이 안정한 기분을 느끼게 해준다.',
          '내 본모습을 보고 이해해준다는 느낌이 든다.',
          '위로를 주고받는 걸 좋아한다.',
          '자기 행동을 반성하고 변화를 꾀한다.',
          '웃으며 즐길 수 있다.',
          '함께 있으면 즐겁다.'
        ]
      },
      {
        title: '관계를 맺는 새로운 방법',
        items: [
          '필요할 때마다 도움을 요청한다.',
          '명확하고 친밀한 의사소통으로 내가 원하는 것을 부탁한다.',
          '사람들이 나를 받아들이든 아니든 있는 모습 그대로 살아간다.',
          '내가 실제로 가진 에너지 이상으로 주려고 하지 않는다.',
          '특별한 사람들과 꾸준히 연락하고 답장을 한다.',
          '항상 완벽할 필요는 없다는 걸 기억한다.',
          '피곤하면 쉬고, 과부하 전에 멈춘다.',
          '실수는 인간적이라는 관점을 유지한다.',
          '의사를 명확히 전달하고 원하는 결과를 적극적으로 요청한다.',
          '대화 중 지치면 예의 있게 쉬는 시간을 요청한다.'
        ]
      }
    ]
  }
];

const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let currentTab = 0;

function itemId(tabIndex, sectionIndex, itemIndex) {
  return `${tabIndex}-${sectionIndex}-${itemIndex}`;
}

function renderTabs() {
  const container = document.getElementById('tabs');
  container.innerHTML = '';
  data.forEach((tab, i) => {
    const btn = document.createElement('button');
    btn.textContent = tab.title;
    if (i === currentTab) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentTab = i;
      renderTabs();
      renderContent();
    });
    container.appendChild(btn);
  });
}

function renderContent() {
  const container = document.getElementById('tabContent');
  const tab = data[currentTab];
  container.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = tab.title;
  container.appendChild(title);

  tab.sections.forEach((section, sectionIndex) => {
    const sec = document.createElement('section');
    const h3 = document.createElement('h3');
    h3.textContent = section.title;
    sec.appendChild(h3);

    if (section.text) {
      const text = document.createElement('div');
      text.className = 'text-block';
      text.textContent = section.text;
      sec.appendChild(text);
    }

    if (section.items) {
      const ul = document.createElement('ul');
      section.items.forEach((item, itemIndex) => {
        const id = itemId(currentTab, sectionIndex, itemIndex);
        const li = document.createElement('li');
        const label = document.createElement('label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = Boolean(saved[id]);
        checkbox.addEventListener('change', (e) => {
          saved[id] = e.target.checked;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        });

        const span = document.createElement('span');
        span.textContent = item;

        label.appendChild(checkbox);
        label.appendChild(span);
        li.appendChild(label);
        ul.appendChild(li);
      });
      sec.appendChild(ul);
    }

    container.appendChild(sec);
  });
}

document.getElementById('resetAll').addEventListener('click', () => {
  if (!confirm('모든 체크 상태를 초기화할까요?')) return;
  Object.keys(saved).forEach((k) => delete saved[k]);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  renderContent();
});

renderTabs();
renderContent();
