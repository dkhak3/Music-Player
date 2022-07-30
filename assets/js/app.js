const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const playlist = $('.playlist')
const cd = $('.cd')
const heading = $('header h2')
const thumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
let newArray = []
var isMusic = 'vietnamese'
const PlAYER_STORAGE_KEY = "MUSIC_APP";
const LIST_STORAGE_KEY = "MUSIC_LIST";
const random = $('.btn-random')
const repeat = $('.btn-repeat')
let indexArray = []
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    setConfig: function(key, value){
        this.config[key] = value
        localStorage.setItem(PlAYER_STORAGE_KEY,JSON.stringify(this.config))
    },
    songs: {
        vietnamese: [
            {
                name: 'GIAYPHUT',
                singer: 'kidsai, Niz',
                path: './assets/music/no_remix/song1.mp3',
                image: './assets/img/no_remix/song1.jpg'
            },
            {
                name: 'Lời Yêu Ngây Dại',
                singer: 'Kha',
                path: './assets/music/no_remix/song2.mp3',
                image: './assets/img/no_remix/song2.jpg'
            },
            {
                name: 'Buông Đôi Tay Nhau Ra',
                singer: 'Sơn Tùng M-TP',
                path: './assets/music/no_remix/song3.mp3',
                image: './assets/img/no_remix/song3.jpg'
            },
            {
                name: 'SAU ĐÊM NAY',
                singer: 'Sean ft Tweny x Sshine',
                path: './assets/music/no_remix/song4.mp3',
                image: './assets/img/no_remix/song4.jpg'
            },
            {
                name: 'Bài Hát Của Em',
                singer: 'Uyên Linh',
                path: './assets/music/no_remix/song5.mp3',
                image: './assets/img/no_remix/song5.jpg'
            },
            {
                name: 'SOFAR',
                singer: 'Binz',
                path: './assets/music/no_remix/song6.mp3',
                image: './assets/img/no_remix/song6.jpg'
            },
            {
                name: 'Gái Độc Thân',
                singer: 'tlinh',
                path: './assets/music/no_remix/song7.mp3',
                image: './assets/img/no_remix/song7.jpg'
            },
            {
                name: 'Thích Quá Rùi Nà',
                singer: 'tlinh x Trung Trần',
                path: './assets/music/no_remix/song8.mp3',
                image: './assets/img/no_remix/song8.jpg'
            },
            {
                name: 'NGƯỜI HÃY QUÊN EM ĐI',
                singer: 'MỸ TÂM',
                path: './assets/music/no_remix/song9.mp3',
                image: './assets/img/no_remix/song9.jpg'
            },
            {
                name: 'An Thần',
                singer: 'Low G, Thắng',
                path: './assets/music/no_remix/song10.mp3',
                image: './assets/img/no_remix/song10.jpg'
            },
            {
                name: "Guess I'll Leave",
                singer: 'Funny Death',
                path: './assets/music/no_remix/song11.mp3',
                image: './assets/img/no_remix/song11.jpg'
            },
            {
                name: 'HongKong1',
                singer: 'Nguyễn Trọng Tài x San Ji x Double X',
                path: './assets/music/no_remix/song12.mp3',
                image: './assets/img/no_remix/song12.jpg'
            },
            {
                name: 'MUỐN ĐƯỢC CÙNG EM',
                singer: 'FREAKY x CM1X (ft. QUỲNH GAI)',
                path: './assets/music/no_remix/song13.mp3',
                image: './assets/img/no_remix/song13.jpg'
            },
            {
                name: 'Still With You',
                singer: 'Jungkook (BTS)',
                path: './assets/music/no_remix/song14.mp3',
                image: './assets/img/no_remix/song14.jpg'
            },
            {
                name: 'ONLY',
                singer: '이하이 (LeeHi)',
                path: './assets/music/no_remix/song15.mp3',
                image: './assets/img/no_remix/song15.jpg'
            },
            {
                name: 'Bùa Yêu',
                singer: 'BÍCH PHƯƠNG',
                path: './assets/music/no_remix/song16.mp3',
                image: './assets/img/no_remix/song16.jpg'
            },
            {
                name: 'Một Cú Lừa',
                singer: 'BÍCH PHƯƠNG',
                path: './assets/music/no_remix/song17.mp3',
                image: './assets/img/no_remix/song17.jpg'
            },
            {
                name: 'Đừng Kể Ai Nghe',
                singer: 'D.Blue ft. 1nG',
                path: './assets/music/no_remix/song18.mp3',
                image: './assets/img/no_remix/song18.jpg'
            },
            {
                name: "Ex's Hate Me",
                singer: 'B Ray x Masew (Ft AMEE)',
                path: './assets/music/no_remix/song19.mp3',
                image: './assets/img/no_remix/song19.jpg'
            },
            {
                name: 'Sống Xa Anh Chẳng Dễ Dàng',
                singer: 'Bảo Anh ft Mr Siro',
                path: './assets/music/no_remix/song20.mp3',
                image: './assets/img/no_remix/song20.jpg'
            },
            {
                name: 'Và Thế Là Hết',
                singer: 'Chillies',
                path: './assets/music/no_remix/song21.mp3',
                image: './assets/img/no_remix/song21.jpg'
            },
            {
                name: 'VÌ YÊU CỨ ĐÂM ĐẦU',
                singer: 'MIN x ĐEN VÂU x JUSTATEE',
                path: './assets/music/no_remix/song22.mp3',
                image: './assets/img/no_remix/song22.jpg'
            },
            {
                name: 'SIMPLE LOVE',
                singer: 'Obito x Seachains x Davis x Lena',
                path: './assets/music/no_remix/song23.mp3',
                image: './assets/img/no_remix/song23.jpg'
            },
            {
                name: 'HÔN ANH',
                singer: 'MIN',
                path: './assets/music/no_remix/song24.mp3',
                image: './assets/img/no_remix/song24.jpg'
            },
            {
                name: 'Có Em Chờ',
                singer: 'MIN',
                path: './assets/music/no_remix/song25.mp3',
                image: './assets/img/no_remix/song25.jpg'
            },
            {
                name: 'LUÔN BÊN ANH',
                singer: 'MIN',
                path: './assets/music/no_remix/song26.mp3',
                image: './assets/img/no_remix/song26.jpg'
            },
            {
                name: 'YÊU 5',
                singer: 'Rhymastic',
                path: './assets/music/no_remix/song27.mp3',
                image: './assets/img/no_remix/song27.jpg'
            },
            {
                name: 'YÊU ĐƯỢC KHÔNG',
                singer: 'ĐỨC PHÚC x VIRUSS',
                path: './assets/music/no_remix/song28.mp3',
                image: './assets/img/no_remix/song28.jpg'
            },
            {
                name: '3107',
                singer: 'W/n',
                path: './assets/music/no_remix/song29.mp3',
                image: './assets/img/no_remix/song29.jpg'
            },
            {
                name: 'DAM DUOI',
                singer: 'kidsai ft. Bbynascar',
                path: './assets/music/no_remix/song30.mp3',
                image: './assets/img/no_remix/song30.jpg'
            },
            {
                name: 'KIBEEM',
                singer: 'kidsai',
                path: './assets/music/no_remix/song31.mp3',
                image: './assets/img/no_remix/song31.jpg'
            },
            {
                name: 'Savage',
                singer: 'aespa 에스파',
                path: './assets/music/no_remix/song32.mp3',
                image: './assets/img/no_remix/song32.jpg'
            },
            {
                name: 'Not Around',
                singer: 'Nova',
                path: './assets/music/no_remix/song33.mp3',
                image: './assets/img/no_remix/song33.jpg'
            },
            {
                name: 'Trú Mưa',
                singer: 'Nhóm HKT',
                path: './assets/music/no_remix/song34.mp3',
                image: './assets/img/no_remix/song34.jpg'
            },
            {
                name: 'If You Said So',
                singer: 'Coldzy',
                path: './assets/music/no_remix/song35.mp3',
                image: './assets/img/no_remix/song35.jpg'
            },
            {
                name: 'ON TOP',
                singer: 'The Girl Next Door',
                path: './assets/music/no_remix/song36.mp3',
                image: './assets/img/no_remix/song36.jpg'
            },
            {
                name: 'PHÍA SAU MỘT CÔ GÁI',
                singer: 'Soobin Hoàng Sơn',
                path: './assets/music/no_remix/song37.mp3',
                image: './assets/img/no_remix/song37.jpg'
            },
            {
                name: 'HẾT THƯƠNG CẠN NHỚ',
                singer: 'ĐỨC PHÚC',
                path: './assets/music/no_remix/song38.mp3',
                image: './assets/img/no_remix/song38.jpg'
            },
            {
                name: 'ĐIỀU CHƯA NÓI',
                singer: 'TÙA',
                path: './assets/music/no_remix/song39.mp3',
                image: './assets/img/no_remix/song39.jpg'
            },
            {
                name: 'HƠN CẢ YÊU',
                singer: 'ĐỨC PHÚC',
                path: './assets/music/no_remix/song40.mp3',
                image: './assets/img/no_remix/song40.jpg'
            },
            {
                name: 'Thức Giấc',
                singer: 'Da LAB',
                path: './assets/music/no_remix/song41.mp3',
                image: './assets/img/no_remix/song41.jpg'
            },
            {
                name: 'Đừng Xem Ai Đó Là Cả Thế Giới',
                singer: 'Reddy',
                path: './assets/music/no_remix/song42.mp3',
                image: './assets/img/no_remix/song42.jpg'
            },
            {
                name: 'BABY I TOLD U',
                singer: 'MONSTAR',
                path: './assets/music/no_remix/song43.mp3',
                image: './assets/img/no_remix/song43.jpg'
            },
            {
                name: 'MAMA BOY',
                singer: 'AMEE',
                path: './assets/music/no_remix/song44.mp3',
                image: './assets/img/no_remix/song44.jpg'
            },
            {
                name: 'LÁI MÁY BAY',
                singer: 'BÌNH GOLD',
                path: './assets/music/no_remix/song45.mp3',
                image: './assets/img/no_remix/song45.jpg'
            },
            {
                name: 'Nến Và Hoa',
                singer: 'Rhymastic',
                path: './assets/music/no_remix/song46.mp3',
                image: './assets/img/no_remix/song46.jpg'
            },
            {
                name: 'Chìm Sâu',
                singer: 'MCK',
                path: './assets/music/no_remix/song48.mp3',
                image: './assets/img/no_remix/song48.jpg'
            },
            {
                name: 'Đen Đá Không Đường',
                singer: 'AMEE',
                path: './assets/music/no_remix/song49.mp3',
                image: './assets/img/no_remix/song49.jpg'
            },
            {
                name: 'Nắng Ấm Xa Dần',
                singer: 'Sơn Tùng M-TP',
                path: './assets/music/no_remix/song50.mp3',
                image: './assets/img/no_remix/song50.jpg'
            },
            {
                name: 'HÃY TRAO CHO ANH',
                singer: 'SƠN TÙNG M-TP ft. Snoop Dogg',
                path: './assets/music/no_remix/song51.mp3',
                image: './assets/img/no_remix/song51.jpg'
            },
            {
                name: 'FAKE LOVE',
                singer: 'BTS (방탄소년단)',
                path: './assets/music/no_remix/song52.mp3',
                image: './assets/img/no_remix/song52.jpg'
            },
            {
                name: 'DNA',
                singer: 'BTS (방탄소년단)',
                path: './assets/music/no_remix/song53.mp3',
                image: './assets/img/no_remix/song53.jpg'
            },
            {
                name: 'Tình Em Là Đại Dương',
                singer: 'Sơn Tùng M-TP Cover',
                path: './assets/music/no_remix/song54.mp3',
                image: './assets/img/no_remix/song54.jpg'
            },
            {
                name: 'double take',
                singer: 'dhruv',
                path: './assets/music/no_remix/song55.mp3',
                image: './assets/img/no_remix/song55.jpg'
            },
            {
                name: 'Snowman',
                singer: 'Sia',
                path: './assets/music/no_remix/song56.mp3',
                image: './assets/img/no_remix/song56.jpg'
            },
            {
                name: "Nothin’ On You",
                singer: 'B.o.B',
                path: './assets/music/no_remix/song57.mp3',
                image: './assets/img/no_remix/song57.jpg'
            },
            {
                name: "Tháng Năm",
                singer: 'Soobin x Freak D',
                path: './assets/music/no_remix/song58.mp3',
                image: './assets/img/no_remix/song58.jpg'
            },
            {
                name: "Tống Đăng - Mơ - Vũ Cát Tường X Chjuljnh",
                singer: '',
                path: './assets/music/no_remix/song59.mp3',
                image: './assets/img/no_remix/song59.jpg'
            },
        ],
        love: [
        ],
    },
    // defineProperties: function() {
    //     Object.defineProperty(this, 'currentSong', {
    //         get: function() {
    //             return this.songs[currentMusic][this.currentIndex]
    //         }
    //     })
    // },
    handleEvents: function(isMusic) {
        // Xử lý scroll 
        const cdWidth = cd.offsetWidth;
        const _this = this
        document.onscroll = function() {
            if($('.download.active') || false){
                $('.download.active').classList.remove('active')
            }
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const newCdWidth = cdWidth - scrollTop;
                cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
                cd.style.opacity = newCdWidth / cdWidth;
            }
        // Play songs
        playBtn.onclick = function() {
            if(_this.isPlaying){
                audio.pause()
            } else {
                audio.play()
                _this.config[isMusic] > 2 ? $(".song.active").scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                }) : _this.scrollToActiveSong(isMusic)
            }
        }

        // Animation thumb
        const animateThumb = cd.animate([
            {
                transform: "rotate(360deg)"
            }
        ], {
            duration: 10000,
            iterations: Infinity
        }) 
        animateThumb.pause()
        this.hendleAbumMusic(animateThumb)
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add("playing")
            animateThumb.play()            
        }
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove("playing")
            animateThumb.pause()
        }
        // Tiến độ bài hát
        audio.ontimeupdate = function() {
            if (audio.duration){
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.value = progressPercent
            }
        }
        // Tua bài hát
        progress.oninput = function (e){
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime
            audio.pause()
        }
        progress.onchange = function (e){
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime
            audio.play()
        }

        // Next một bài hát
        nextBtn.onclick = function () {
            if(_this.isRandom){
                _this.randomSong(isMusic)
            }
                _this.nextSong(isMusic)
                _this.renderSongs(isMusic)
                _this.scrollToActiveSong()
                audio.play()
        }
        // Prev một bài hát
        prevBtn.onclick = function () {
            if(_this.isRandom){
                _this.randomSong(isMusic)
            }
                _this.prevSong(isMusic)
                _this.renderSongs(isMusic)
                _this.scrollToActiveSong()
                audio.play()
        }
        // Khi kết thúc một bài hát
        audio.onended = function () {
            if(_this.isRandom){
                _this.randomSong(isMusic)
                audio.play()
            } 
            else if(_this.isRepeat){
                audio.play()
            }
            else {
                nextBtn.onclick()
            }
        }
        // random bài hát
        random.onclick = function () {
            if(_this.isRepeat){
                _this.isRepeat = !_this.isRepeat
                repeat.classList.toggle('active', _this.isRepeat)
                _this.setConfig('isRepeat',_this.isRepeat)

            }
                _this.isRandom = !_this.isRandom
                _this.setConfig('isRandom',_this.isRandom)
                random.classList.toggle('active', _this.isRandom)
        }
        repeat.onclick = function () {
            if(_this.isRandom){
                _this.isRandom = !_this.isRandom
                random.classList.toggle('active', _this.isRandom)
                _this.setConfig('isRandom',_this.isRandom)

            }
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat',_this.isRepeat)
            repeat.classList.toggle('active', _this.isRepeat)
        }
        // Chọn bài hát 
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active)");
            if(songNode && !e.target.closest('.option')){
                isMusic == undefined ? isMusic = 'vietnamese' : ''
                _this.currentIndex = Number(songNode.dataset.index)
                _this.setConfig(isMusic,_this.currentIndex)
                _this.loadCurrentSong(isMusic)
                _this.renderSongs(isMusic)
                audio.play()
            }
            if(e.target.closest('.option')){
                var name = e.target.closest('.option').dataset.name
                var singer = e.target.closest('.option').dataset.singer
                var index = e.target.closest('.option').dataset.index
                var image = e.target.closest('.option').dataset.image
                var path = e.target.closest('.option').dataset.path
                    const getLocalSongs = _this.songs.love.filter(function(value){
                        return value.name == name
                    })
                    // if(getLocalSongs.length >= 1){
                    //     $('.like').innerText = 'Xóa bài hát khỏi danh sách yêu thích'
                    //     $('.like').classList.add('active')
                    //     $('.like').setAttribute('value','unlike')
                    // }else {
                    //     $('.like').innerText = 'Thêm bài hát vào danh sách yêu thích'
                    //     $('.like').setAttribute('value','like')
                    //     $('.like').classList.remove('active')
                    // }
                    $('.blockoptions').classList.add('active')
                    $('.box').classList.add('active')
                    $('.download a').setAttribute('href', path)
                    var opt = {'data-name':name, 'data-singer': singer, 'data-index':index,'data-image': image,'data-path': path};
                    Object.keys(opt).forEach(function(key){
                        $('.like').setAttribute(key, opt[key])
                    })
                    _this.hendleLikeSongs(opt,isMusic,animateThumb)
            }
        }
        $('.box').onclick = function(e){
            e.target.classList.remove('active')
            $('.blockoptions').classList.remove('active')
        }
        //  
    },
    hendleAbumMusic: function(animateThumb){      
        const that = this
        $$('.locationmusic div').forEach(function(value){
            value.onclick = function(e){
                const valueIsMusic = e.target.getAttribute('value')
                that.checkCurrentIndex(isMusic)
                if(!e.target.closest('.locationmusic > .select')){
                    if(e.target.innerText == 'LOVE' && that.songs.love.length === 0){
                        alert('Bạn chưa có bài hát yêu thích!!')
                    } else {
                        switch(valueIsMusic) {
                            case 'vietnamese':
                                isMusic = 'vietnamese'
                                break;
                            case 'english':
                                isMusic = 'english'
                                break;
                            case 'love':
                                isMusic = 'love'
                                break;
                          }
                        that.config[isMusic] == undefined ? that.setConfig(isMusic, 0) : '' 
                        that.config[isMusic] ? that.currentIndex = that.config[isMusic] : that.currentIndex = 0
                        indexArray = []
                        progress.value = 0
                        animateThumb.pause()
                        that.isPlaying = false;
                        player.classList.remove('playing')
                        cd.style.width = 200 + 'px'
                        cd.style.opacity = null;
                        that.renderSongs(isMusic)
                        that.handleEvents(isMusic)
                        that.loadCurrentSong(isMusic)
                        that.nextSong(isMusic)
                        that.prevSong(isMusic)
                        $('.locationmusic > .select').classList.remove('select')
                        e.target.classList.add('select') 
                        // $('.song.active') ? that.scrollToActiveSong() : ''
                        that.config[isMusic] > 2 ? $(".song.active").scrollIntoView({
                            behavior: "smooth",
                        block: "center",
                        }) : that.scrollToActiveSong()
                    }                        
                }                    
            }
        })    
    },
    checkCurrentIndex: function (isMusic){
        if(this.config[isMusic] == null) {
            this.config[isMusic] = 0
        }
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            $(".song.active").scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
                }) 
        }, 300)
        
    },
    loadCurrentSong: function(isMusic) {
        heading.textContent = 
        this.config[isMusic] ? this.songs[isMusic][this.config[isMusic]].name 
        : this.songs[isMusic][this.currentIndex].name
        thumb.style.backgroundImage = 
       this.config[isMusic] ? `url(${this.songs[isMusic][this.config[isMusic]].image})` 
        : `url(${this.songs[isMusic][this.currentIndex].image})`
        audio.src = 
        this.config[isMusic] ? this.songs[isMusic][this.config[isMusic]].path 
        : this.songs[isMusic][this.currentIndex].path
    },
    renderSongs: function(music) {
        this.config['vietnamese'] == undefined ? this.setConfig('vietnamese', 0) : ''
        music == undefined ? music = 'vietnamese' : ''
        const htmls = this.songs[music].map((song,index) => 
            `
                <div class="song ${index === this.config[music] ? "active" : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option" data-index="${index}" data-path="${song.path}" data-name="${song.name}" data-singer="${song.singer}" data-image="${song.image}">
                        <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                `
        );
        playlist.innerHTML = htmls.join('')
    },
    hendleLikeSongs: function(dataSongs,isMusic,animateThumb){
        const name = dataSongs['data-name']
        const singer = dataSongs['data-singer']
        const path = dataSongs['data-path']
        const image = dataSongs['data-image']
        const index = dataSongs['data-index']
        const listArray = {
            name,
            singer,
            path,
            image
        }
        const _this = this
        $('.like').onclick = function(e){
        if(e.target.getAttribute('value') == 'like') {
            if(_this.songs.love.length >= 0 && isMusic != 'english'){
                isMusic = 'vietnamese';
            }
            _this.songs.love.push(listArray)
            localStorage.setItem(LIST_STORAGE_KEY,JSON.stringify(_this.songs.love))
            _this.setConfig(name,name)
            _this.renderSongs(isMusic)
            $('.like').classList.add('active')
            $('.like').innerText = 'Xóa bài hát khỏi danh sách yêu thích'
            $('.box').click()
            alert('Đã thêm vào danh sách yêu thích')
        }
        else if(e.target.getAttribute('value') == 'unlike'){
            const deleteArray = _this.songs.love.filter(function(value){
                return value.name != name
            })
            const storageMusic = JSON.parse(localStorage.getItem(LIST_STORAGE_KEY))
            newArray = deleteArray 
            _this.songs.love = newArray 
            localStorage.setItem(LIST_STORAGE_KEY,JSON.stringify(_this.songs.love))
            _this.setConfig(name,null)
            newArray = []
            _this.renderSongs(isMusic)

            if(storageMusic[_this.currentIndex].name){
                if(storageMusic[_this.currentIndex].name == name && _this.config[isMusic] == 0 && isMusic == 'love'){
                    _this.config[isMusic] = 0
                    player.classList.remove('playing')
                    _this.isPlaying = false
                    progress.value = 0
                    animateThumb.pause()
                    _this.songs.love.length > 0 ? _this.renderSongs(isMusic) : ''
                    _this.songs.love.length > 0 ? _this.loadCurrentSong(isMusic) : ''
                }                
            }
            if(_this.config[isMusic] > 0 && isMusic == 'love'){
                if(storageMusic[_this.currentIndex].name != name && index > _this.config[isMusic]){
                    _this.renderSongs(isMusic)
                }
                if(storageMusic[_this.currentIndex].name != name && index < _this.config[isMusic]){
                    _this.config[isMusic] = _this.config[isMusic] - 1
                    index > _this.currentIndex ? '' : _this.setConfig(isMusic, _this.config[isMusic])
                    _this.currentIndex--
                    _this.renderSongs(isMusic)
                }
                if(storageMusic[_this.currentIndex].name == name && index == storageMusic.length - 1){
                    player.classList.remove('playing')
                    _this.isPlaying = false
                    progress.value = 0
                    animateThumb.pause()
                    _this.currentIndex = --_this.config[isMusic]
                    _this.setConfig(isMusic, _this.currentIndex)
                    _this.loadCurrentSong(isMusic)
                    _this.renderSongs(isMusic)
                }
            }
            if(_this.songs.love.length == 0){
                _this.currentIndex = _this.config[isMusic]
                _this.config[isMusic] = 0
                $('.vietnamese').click()
            }
            $('.like').classList.remove('active')
            $('.like').innerText = 'Thêm bài hát vào danh sách yêu thích'
            $('.box').click()
        }
    }
    },
    nextSong : function(isMusic) {
        isMusic == undefined ? isMusic = 'vietnamese' : ''
        this.setConfig(isMusic, ++this.config[isMusic])
        ++this.currentIndex
        if(this.config[isMusic] >= this.songs[isMusic].length){
            this.setConfig(isMusic, 0)
            this.currentIndex = 0
        }
        this.loadCurrentSong(isMusic)
        // this.renderSongs(isMusic)
    },
    prevSong: function(isMusic) {
        isMusic == undefined ? isMusic = 'vietnamese' : ''
        this.setConfig(isMusic, --this.config[isMusic])
        --this.currentIndex
        if(this.config[isMusic] < 0){
            this.setConfig(isMusic, this.songs[isMusic].length - 1)
            this.currentIndex = this.songs[isMusic].length - 1
        }
        this.loadCurrentSong(isMusic)
        // this.renderSongs(isMusic)
    },
    randomSong: function(isMusic) {
        isMusic == undefined ? isMusic = 'vietnamese' : ''
        let newIndex;
        let _that = this
        if(indexArray.length === _that.songs[isMusic].length){
            indexArray = []
        }
        do {            
            newIndex = Math.floor(Math.random() * _that.songs[isMusic].length) 
        } 
        while(indexArray.includes(newIndex))
            indexArray.push(newIndex)
            _that.config[isMusic]  = newIndex
            _that.loadCurrentSong(isMusic)
            _that.renderSongs(isMusic)
            _that.scrollToActiveSong()
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },

    start: function() {
        localStorage.getItem(LIST_STORAGE_KEY) && this.songs.love.length === 0 ? this.songs.love = JSON.parse(localStorage.getItem(LIST_STORAGE_KEY))  : ''
        // ham xu ly music location
        this.hendleAbumMusic()

        // Hàm xử lý events DOM
        this.handleEvents()
        // Hàm lấy ra 1 song
        // this.defineProperties();

        

        // Hàm render ra List Songs
        this.renderSongs(isMusic)
        // Hàm load song
        this.loadCurrentSong(isMusic)
        // load dữ liệu config trên localStorage
        this.loadConfig()
        random.classList.toggle('active', this.isRandom || false)
        repeat.classList.toggle('active', this.isRepeat || false)

    }
}

app.start()

