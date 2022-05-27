

// toggle menu genres
const openGenres = document.querySelector(".header-genres");
const closeGenres = document.querySelector(".genres-close");
const btnlistGenres = document.querySelectorAll(".genres-item");
openGenres.onclick = function(){
    document.querySelector(".genres-menu").classList.toggle("none")
}

closeGenres.onclick = function(){
    document.querySelector(".genres-menu").classList.toggle("none")
}

btnlistGenres.forEach(item =>{
    item.onclick = function(){
    document.querySelector(".genres-menu").classList.toggle("none")
  }
})

// show,close login in
const showLoginSub= document.querySelectorAll(".login-css");
const closeLogin = document.querySelector(".closeForm");
const formLogin = document.querySelector(".form-login");

showLoginSub.forEach(item =>{
  item.onclick = function () { 
    formLogin.classList.remove("none")
  }
})


closeLogin.onclick = function () {
  formLogin.classList.add("none")
}




// handle scroll header

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("header").style.display = "none";
  } else {
    document.getElementById("header").style.display = "block";
  }
}

// handle get film by api

const serFilmRender = ["bo-ba-dien-sau","chien-than-cuong-phi-phung-khinh-thien-ha",'te-cong-hang-yeu-2-than-long-tai-the','thoi-dai-vang-son', 'chuyen-nang-wanthong', 'lai-la-mot-ngay-lam-viec-cham-chi-2', 'halston', 'duoi-bong-moc-mien', 'canh-cua-trung-sinh','vua-ho-phan-2', 'vung-dat-quy-du-bong-toi-vo-tan', 'vuong-quoc-dong-vat-phan-5', 'cau-be-do-choi-phan-2', 'bulgasal-truong-sinh-bat-tu', 'vu-trom-tranh-lon-nhat-the-gioi', 'vuot-qua-khung-hoang','dao-nguoc-nhan-sinh','tham-ac-de-anh-dung-yeu', 'co-nang-trong-trang-oh-woo-ri', 'nghiep-trong-phuc', 'loi-nguyen-ma-lai', 'sach-trang-ket-hon', 'love-logic-revenge', 'canh-dep-ngay-vui-biet-bao-gio', 'dolunay', 'ada-masali']
const sigFilmRender = ["su-thuc-tinh-cua-vu-khi-than-but-cuu-long","de-che-pho-truong-phan-2","luan-hoi-chien","let-me-check-the-walkthrough-first","chien-binh-my-vi-ngot-ngao",'huyen-thoai-kung-fu','i-am-nezha','man-suong-chet','xac-chet-tro-ve', 'trai-tim-dung-cam-2012', 'rong-dat-5', 'thu-gui-momo', 'phia-sau-chien-tuyen-2-truc-quy', 'rong-dat-2-tinh-giac', 'tan-nat-2008', 'mot-tam-hon-dep', 'tieu-su-john', 'tro-choi-ai-quoc', 'nghich-chien', 'nguoi-tuyet', 'ke-nhai-tieng', 'khac-tinh-cua-ma-ca-rong', 'thuy-hu-truyen', 'ngay-huan-luyen', 'tieu-mon-than', 'khoa-hoc-va-cam-tinh', 'huyen-thoai-kung-fu', 'khi-harry-gap-sally','xac-chet-tro-ve', 'tan-nat-2008', 'trai-tim-dung-cam-2012', 'thu-gui-momo', 'ngay-huan-luyen', 'rong-dat-2-tinh-giac', 'tieu-su-john', 'tro-choi-ai-quoc', 'khoa-hoc-va-cam-tinh', 'nguoi-tuyet', 'huyen-thoai-kung-fu', 'rong-dat-5', 'tieu-mon-than', 'mot-tam-hon-dep', 'nghich-chien', 'phia-sau-chien-tuyen-2-truc-quy','co-nang-goi-cam', 'hoi-ky-belfast', 'nguoi-tinh-nam-17-tuoi', 'tham-tu-lung-danh-conan-vien-dan-do','thuong-hai-da-hanh-1-vu-an-hac-kim', 'dat-me', 'vo-trang-nguyen-to-khat-nhi-thanh-du-troi-ban', 'vo-tong-huyet-chien-su-tu-lau', 'thuy-quai-2-rung-den', 'biet-doi-cam-tu-2021', 'doi-mat-cua-tammy-faye', 'be-ha-van-tue', 'giai-dieu-con-tim', 'anh-dao-mau-hong-va-dai-mien-vuong','nguoi-linh-vo-danh', 'nguoi-thua-ke-1995', 'nguoi-trong-giang-ho', 'ke-tron-chay', 'nga-re-tu-than-5', 'chien-tranh-lanh', 'doi-chong-tham-nhung-2014', 'bao-thai-quy', 'nga-re-tu-than-4', 'man-suong-chet', 'nhung-chien-binh-mang-ten-thanh', 'chuyen-di-cua-cuoc-doi', 'huynh-de-hoang-kim', 'nam-47-den-toi', 'dua-anh-toi-di-gium-cai', 'mat-ngu', 'nga-re-tu-than-6-khu-nghi-duong-cuoi-cung', 'nguoi-dep-va-quai-thu-2011', 'cong-chua-va-chang-mai', 'chuyen-co-khong-luc', 'chuyen-gia-chat-no'];
const aniFilmRender = ["nga-quy-vung-tokyo","thieu-lam-tu",'nhung-co-gai-equestria-tau-luon-tinh-ban', 'let-me-check-the-walkthrough-first', 'vo-boc-ma-sac2045-phan-2', 'nhung-co-gai-equestria-tinh-ban-bi-lang-quen', 'healer-girl', 'vu-dieu-ma-thuat', 'kyoukai-senki', 'tieu-ma-dau-lo-tay-roi','black-lagoon-phan-3', 'black-lagoon-phan-2', 'nha-bup-be-cua-gabby-phan-2', 'hanh-trinh-pokemon-loat-phim-pokemon-master-journeys', 'bo-ba-dien-sau', 'le-cau-sieu-cua-vua-hoa-hong', 'nha-bup-be-cua-gabby-phan-3', 'khe-ho-thoi-khong', 'tho-peter-2-cuoc-tron-chay','tieu-ma-dau-lo-tay-roi','kyoukai-senki','kyoukai-senki', 'tieu-ma-dau-lo-tay-roi', 'let-me-check-the-walkthrough-first', 'vu-dieu-ma-thuat', 'vo-boc-ma-sac2045-phan-2', 'healer-girl', 'nhung-co-gai-equestria-tau-luon-tinh-ban', 'nhung-co-gai-equestria-tinh-ban-bi-lang-quen']
const listFilm = serFilmRender.concat(sigFilmRender,aniFilmRender)  
listFilm.map(item =>{
    fetch(`https://ophim1.com/phim/${item}`)
        .then(res => res.json())
        .then(itemFilm => {
            // find action list tâm lí,tình cảm,hành động,viễn tưởng,võ thuật,hài hước,phiêu lưu,bí ẩn
            let listAction = []
            if(itemFilm.movie.category[0].name == "Hành Động"){
                listAction.push(itemFilm)
            }
        })
})


// push each genres to each array and render 

// get video "itemFilm.episodes[0].server_data[0].link_embed"
// get image itemFilm.movie.thumb_url
// get name "itemFilm.movie.name"
// get type "itemFilm.movie.type"  get country "itemFilm.movie.country[0].name"
//get genres "itemFilm.movie.category[0].name"

