
var contents =  [
{
    heading: "Du lịch trở lại một cách an toàn hơn",
    description: "Luôn cập nhật các mẹo mới nhất để điều chỉnh kế hoạch du lịch trong giai đoạn dịch COVID-19 cũng như sau này.",
    cards: [
        {
            heading: "Câu trả lời về COVID-19 cho du khách",
            description: "Tìm hiểu xem chúng tôi đang hỗ trợ bạn như thế nào với các chương trình và chính sách mới nhất.",
            image: "covid-01.jpg",
        },
        {
            heading: "Quy định hạn chế đi lại trên toàn cầu",
            description: "Xem xét các hướng dẫn dành cho Chủ nhà và khách trong khu vực hoặc điểm đến của bạn.",
            image: "covid-02.jpg",
        },
        {
            heading: "Các đặt phòng bị ảnh hưởng bởi COVID-19",
            description: "Tìm hiểu các tùy chọn hủy và hoàn tiền.",
            image: "covid-03.jpg",
        },
        {
            heading: "Yên tâm hơn khi lên kế hoạch trước",
            description: "Tìm hiểu cách lọc những chỗ ở có chính sách hủy linh hoạt.",
            image: "covid-04.jpg",
        },
    ]
},
{
    heading: "Đảm bảo an toàn là trách nhiệm chung",
    description: "Chúng tôi đang yêu cầu cộng đồng Airbnb cam kết thực hiện các biện pháp bảo vệ sức khỏe và an toàn trong đại dịch COVID-19 mới nhất của chúng tôi.",
    cards: [
        {
            heading: "Đeo khẩu trang",
            description: "Khách và Chủ nhà phải tuân thủ luật pháp và hướng dẫn của địa phương liên quan đến việc đeo khẩu trang khi tương tác.",
            image: "covid-05.jpg",
        },
        {
            heading: "Giãn cách xã hội",
            description: "Khi được yêu cầu theo luật pháp hoặc hướng dẫn của địa phương, Chủ nhà và khách phải đồng ý duy trì khoảng cách 2 mét với nhau.",
            image: "covid-06.jpg",
        },
        {
            heading: "Vệ sinh tăng cường",
            description: "Các chủ nhà trên toàn thế giới đang cam kết thực hiện quy trình vệ sinh tăng cường 5 bước có tham khảo ý kiến chuyên gia của chúng tôi.",
            image: "covid-07.jpg",
        },
    ]
},
{
    cards: [
        {
            name: "Tìm hiểu các biện pháp bảo đảm an toàn",
            image: "covid-08.jpg"
        },
        {
            name: "Tìm hiểu thêm",
            image: "covid-09.jpg"
        },
        {
            name: "Khám phá những căn nhà riêng gần bạn",
            image: "covid-10.jpg"
        },
    ]
},
];

// Card-4
const card4Elements = document.getElementById('card-4');
card4Elements.innerHTML = contents[0].cards.map(card => {
    return`
    <div class="col l-6 m-6 c-12">
        <a href="#" class="card-4-wrapper">
            <img class="card-4-img" src="./assets/img/${card.image}" alt="${card.heading}">
            <div class="card-4-text">
                <div class="card-4-heading">
                    <span>${card.heading}</span>
                </div>
                <div class="card-4-description">
                    <span>${card.description}</span>
                </div>
                <span class="card-4-link">Tìm hiểu thêm</span>
            </div>
        </a>
    </div>   
    `
}).join('');

// Card-3
const card3Elements = document.getElementById('card-3');
card3Elements.innerHTML = contents[1].cards.map(card => {
    return`
    <div class="col l-4 m-4 c-12">
        <div class="card-3-wrapper">
            <div class="card-3-img-wrapper">
                <img class="card-3-img" src="./assets/img/${card.image}" alt="${card.heading}">
            </div>
            <div class="card-3-text">
                <div class="card-3-heading">
                    <span>${card.heading}</span>
                </div>
                <div class="card-3-description">
                    <span>${card.description}</span>
                </div>
            </div>
        </div>
    </div>
    `
}).join('');

// Card 1
const card1Elements = document.querySelectorAll('.card-1-btn-img');
card1Elements.forEach((value, index) => {
    const card = contents[2].cards[index]
    value.innerHTML = `
        <div class="card-1-btn">
                <a href="#" class="card-1-btn-text">
                    <span>${card.name}</span>
                </a>
            </div>
            <div class="card-1-img" style="background-image: url(./assets/img/${card.image});"></div>
        </div>
        `;
});
