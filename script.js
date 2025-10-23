// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const feed = document.querySelector('.feed');
    const mainContent = document.querySelector('.main-content');
    let isLoading = false;
    let postIndex = 0; // Index to keep track of which post to load next

    // --- Sample Data for New Posts ---
    // In a real application, this would come from a server
    const samplePostData = [
        {
            username: 'sonsonson',
            avatar: 'assets/sun.jpg',
            media: 'assets/son.png',
            likes: 1023,
            caption: '수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다. 수휘가 당신을 지켜보고 있다.'
        },
        {
            username: 'sonsonson',
            avatar: 'assets/sun.jpg',
            media: 'assets/sonson.jpg',
            likes: 2345,
            caption: '자기야 나 와쩜'
        },
        {
            username: '왕자지우',
            avatar: 'https://placehold.co/32x32/1B2A5A/FFFFFF?text=N',
            media: 'assets/jojutjiwoo.jpg',
            likes: 1023,
            caption: '지우 : 큿소! 수끼리가 나한테 달려오고 있어! 난 분명 죽고 말거야..'
        },
        {
            username: '태초마을이야',
            avatar: 'https://placehold.co/32x32/FFCC00/000000?text=NG',
            media: 'assets/handsomejiwoo.jpg',
            likes: 346,
            caption: '학생이였던 지우가 덤프트럭에 치여 이세계로 이동했다?! 신비로운 지우의 모험이 시작되는데.. 포켓몬 1화에서 계속!'
        },
        {
            username: '그는매우산성적인',
            avatar: 'https://placehold.co/32x32/9370DB/FFFFFF?text=C',
            media: 'assets/bumsuk.jpg',
            likes: 2435,
            caption: '이자식들 아무래도 나를 밥으로 알고 있는 것 같다. 비장의 무기인 치석 샤프를 꺼내 이 자식들을 다 조져야겠어.'
        },
         {
            username: '그에게절대남자를주지마',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/ddong.jpg',
            likes: 54,
            caption: '똥을 매우 좋아하는 돼지이다. 특징으로는 안경을 쓰고 있으며 도제반의 누구와 매우 흡사한 비주얼을 소유중이다.'
        },
         {
            username: '범(이빨)썩',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/amongbumsuk.png',
            likes: 452,
            caption: '분명 우리 중에서 임포스터가 있어. 임포스터의 특징으로는 이빨이 매우 크고, 눈알이 하나라고 하더군, 콜라를 이용해 갈변이 가능한 임포스터라 찾기 꽤 힘들겠어.'
        },
         {
            username: '현운승지',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/young-hyen.jpg',
            likes: 6785,
            caption: '이세계에 간 지우가 부러워. 이세계를 가는 방법을 연구중인 현승이의 모습이다. 5252 검색창에 왜 하렘 애니가 있는데?'
        },
         {
            username: '99lv.지우',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/meyw.jpg',
            likes: 245,
            caption: '매우 고위험 던전에 서식하는 뭬벌석이다. 뭬벌석에 물리면 그 부위 피가 콜라로 바뀌며, 그 콜라향으로 뭬벌석들이 몰려와 피란 피는 모두 콜라로 변하게하여 피가 없는 변산체로 발견될 확률이 높다. 살아서 도망가기란 기대하지 않는것이 좋다.'
        },
         {
            username: '너무하네진짜',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/umma.jpg',
            likes: 6745,
            caption: '엄청난 람보르기니의 자태를 봐라. 제로백 3초. 우유 부스터를 이용해 더 빠른 달리기가 가능하다.'
        },
         {
            username: 'progaymer',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/prohyen.jpg',
            likes: 2135,
            caption: '프로게이게이머 현승승승의 프로필 사진, 그는 매우 빠른 손놀림으로 손을 사로잡았으며, 많은? 여자들의 팬심을 샀을거라는 추측이 없을것같지않지않지않지 않다.'
        },
         {
            username: '베어그릴오븐스',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/kiri1.png',
            likes: 45667,
            caption: '많은 야생을 버텨왔지만, 이번만큼 무섭고 위협을 느낀적은 처음이다. 나.. 살아갈 수 있을까?'
        },
         {
            username: '하수구도둑',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/sad.png',
            likes: 1345,
            caption: '하수구에서 살기 87일차. 두달이라는 시간동안 하수구를 살았지만 이 괴생물체는 뭐냔말이야!'
        },
         {
            username: '베어그릴오븐스',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/kiri2.png',
            likes: 87642,
            caption: '젠장젠장! 이자식 왜 자꾸 따라오는거야? 당장이라도 먹힐것 같아! 도망오는 길에 여자가 있었는데 왜 나만 쫓아오는거야! 설마 이자식 게이다 이말이냐?'
        },
         {
            username: '베어그릴오븐스',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/kiri3.png',
            likes: 25256,
            caption: '집요한 자식.. 왜 자꾸 쫓아오는거야?!'
        },
         {
            username: '베어그릴오븐스',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/kiri4.png',
            likes: 6578,
            caption: '가슴이 웅장해지는 만남..!'
        },
         {
            username: '수끼리전문가',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/sukiri.jpg',
            likes: 24534586,
            caption: '아프리카에서 나타난 코끼리 돌연변이. 얼굴은 흡사 인간과 같고 식성은 풀, 고기, 콩, 인간 가리지않고 그 모든걸 먹어치운다. 인간은 남자를 선호한다는 소문이 있으며, 정말 배고프면 콘크리트까지 먹는다고 알려져있다.'
        },
         {
            username: '퍼리파리전문가',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/fly.jpg',
            likes: 676545,
            caption: '왕자지우가 좋아하는 파리'
        },
         {
            username: '퍼리파리전문가',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/gayfly.jpg',
            likes: 3456,
            caption: '수끼리가 좋아하는 파리'
        },
         {
            username: '범붕방봉석',
            avatar: 'https://placehold.co/32x32/4682B4/FFFFFF?text=T',
            media: 'assets/bumbum.png',
            likes: 562,
            caption: '아 아이디어 떨어진다.'
        },
        
    ];

    // --- Function to Create a New Post Element ---
    function createPostElement(postData) {
        const post = document.createElement('article');
        post.classList.add('post');

        // Caption handling for "Read More"
        const captionMaxLength = 50;
        let captionHTML = '';
        // Sanitize quotes for the data attribute
        const fullCaption = postData.caption.replace(/"/g, '&quot;'); 

        if (postData.caption.length > captionMaxLength) {
            const truncatedCaption = postData.caption.substring(0, captionMaxLength) + '... ';
            captionHTML = `
                <div class="caption" data-full-caption="${fullCaption}">
                    <span class="username">${postData.username}</span>
                    <span class="caption-text">${truncatedCaption}</span>
                    <span class="more-btn">더 보기</span>
                </div>
            `;
        } else {
            captionHTML = `
                <div class="caption">
                    <span class="username">${postData.username}</span>
                    <span class="caption-text">${postData.caption}</span>
                </div>
            `;
        }

        post.innerHTML = `
            <div class="post-header">
                <img src="${postData.avatar}" alt="User avatar" class="post-avatar">
                <span class="username">${postData.username}</span>
                <span class="timestamp"> • 1분</span>
                <i class="fas fa-palette decorate-icon"></i>
                <i class="fas fa-ellipsis-h options-icon"></i>
            </div>
            <div class="decorate-panel" style="display: none;">
                <span>필터:</span>
                <button class="filter-btn" data-filter="none">원본</button>
                <button class="filter-btn" data-filter="grayscale(100%)">흑백</button>
                <button class="filter-btn" data-filter="sepia(100%)">세피아</button>
            </div>
            <div class="post-media">
                <img src="${postData.media}" alt="Post content">
            </div>
            <div class="post-actions">
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
                <i class="far fa-paper-plane"></i>
                <i class="far fa-bookmark bookmark-icon"></i>
            </div>
            <div class="post-info">
                <div class="likes">좋아요 ${postData.likes}개</div>
                ${captionHTML}
                <div class="comments">댓글 12개 모두 보기</div>
            </div>
            <div class="post-add-comment">
                <input type="text" placeholder="댓글 달기...">
                <i class="far fa-smile"></i>
            </div>
        `;
        return post;
    }
    
    // --- Function to Load More Posts ---
    function loadMorePosts() {
        if (isLoading) return; // Prevent multiple loads at once
        isLoading = true;
        
        console.log('Loading more posts...');

        // Simulate a network request delay
        setTimeout(() => {
            // Create and append 2 new posts sequentially
            for (let i = 0; i < 2; i++) {
                // Get the next post in sequence using the postIndex
                const postData = samplePostData[postIndex];
                const newPost = createPostElement(postData);
                feed.appendChild(newPost);
                
                // Increment index and loop back to the start if it reaches the end
                postIndex = (postIndex + 1) % samplePostData.length;
            }
            isLoading = false;
        }, 800); // 0.8-second delay
    }


    // --- Event Delegation for All Post Interactions ---
    feed.addEventListener('click', (event) => {

        // --- Like Button Functionality ---
        if (event.target.matches('.post-actions .fa-heart')) {
            const button = event.target;
            button.classList.toggle('far');
            button.classList.toggle('fas');
            button.classList.toggle('liked');

            // Bonus: Update likes count
            const likesContainer = button.closest('.post').querySelector('.likes');
            // Extract the number from the string
            let currentLikes = parseInt(likesContainer.textContent.match(/\d+/)[0]); 
            
            if (button.classList.contains('liked')) {
                currentLikes++;
            } else {
                currentLikes--;
            }
            likesContainer.textContent = `좋아요 ${currentLikes}개`;
        }
        
        // --- "Read More" Caption Functionality ---
        if (event.target.matches('.more-btn')) {
            const moreButton = event.target;
            const captionContainer = moreButton.closest('.caption');
            const captionTextSpan = captionContainer.querySelector('.caption-text');
            const fullCaption = captionContainer.dataset.fullCaption;
            
            captionTextSpan.textContent = fullCaption;
            moreButton.style.display = 'none'; // Hide the button after expanding
        }

        // --- Decorate Icon Click Functionality ---
        if (event.target.matches('.decorate-icon')) {
            const decoratePanel = event.target.closest('.post').querySelector('.decorate-panel');
            // Toggle visibility of the panel
            decoratePanel.style.display = decoratePanel.style.display === 'none' ? 'flex' : 'none';
        }

        // --- Filter Button Click Functionality ---
        if (event.target.matches('.filter-btn')) {
            const filterButton = event.target;
            const postImage = filterButton.closest('.post').querySelector('.post-media img');
            const filterValue = filterButton.dataset.filter;
            postImage.style.filter = filterValue;
        }
    });

    // --- Infinite Scroll Event Listener ---
    mainContent.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = mainContent;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            loadMorePosts();
        }
    });

    // --- Load initial posts ---
    loadMorePosts(); // Load the first batch of posts
    loadMorePosts(); // Load a second batch to fill up the screen
});

