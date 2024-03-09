
tabUi()
function tabUi() {

    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);
    const tabs = $$('.tab-item');
    const tabContent = $$(' .tab-pane');
    const line = $('.tabs .line')




    function selectTab(index) { // sử lý 
        //  tabs[index] là vị trí của .tab-item  được đánh dấu
        //  tabContent[index] là vị trí của.tab-pane được đánh dấu


        tabs.forEach(tab => tab.classList.remove('active')); // lặp qua các class .tab-item đã được lấy để lấy ra thằng nào có class active 
        tabContent.forEach(pane => pane.classList.remove('active'));// lặp qua các class .tab-pane đã được lấy để lấy ra thằng nào có class active 

        line.style.left = tabs[index].offsetLeft + "px"; // gán vin trí của line cho tabs[index](tabs[index] là vị trí của tab được chọn)
        line.style.width = tabs[index].offsetWidth + "px";// gán độ dài của line cho tabs[index](tabs[index] là vị trí của tab được chọn)

        tabs[index].classList.add('active');// gán class active cho vị trí của tabs[index] được chọn 
        tabContent[index].classList.add('active');// gán class active cho vị trí tabContent[index] được chọn 

    }



    tabs.forEach((tab, index) => { //  lặp qua Tabs
        tab.onclick = function () {// sự kiên click
            selectTab(index);// truyền function selectTab()
        }

    });




    document.addEventListener('keydown', event => { // sự kiên key
        if (event.keyCode === 9) { // nếu key bằng tab trên bàn phím 
            event.preventDefault();// bỏ sự kiện mặc địn của key tab
            const currentab = Array.from(tabs).findIndex(tab => tab.classList.contains('active'));//  tìm tabs nào đang có active
            const nextTab = (currentab === -1) ? 0 : (currentab + 1) % tabs.length;// nếu không tìm thấy tab được chọn thì lấy tab đầu tiên
            selectTab(nextTab);// chọn tab tiếp theo

        }
    })

}


