
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
    card: [
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
    heading: "Tiêu chuẩn cao hơn đối với mọi chỗ ở",
    description: "Quy trình vệ sinh tăng cường 5 bước của chúng tôi có tham khảo ý kiến chuyên gia và có yêu cầu cao hơn so với quy trình vệ sinh cơ bản. Đây là một bước quan trọng trong việc giúp đảm bảo sự an toàn của cộng đồng.",
},
{
    heading: "Không gian riêng, tránh xa nơi đông người",
    description: "Nhà riêng. Nhận phòng không tiếp xúc. Không gian ngoài trời rộng rãi. Không gian thoáng đãng. Tìm kiếm chỗ ở có các tiện nghi quan trọng nhất đối với bạn.",
},
{
    heading: "Giải đáp thắc mắc của bạn",
    description: "",
},
{
    heading: "Tài nguyên khác",
    description: "",
},
];


const cardHeading = document.getElementById('card').querySelectorAll('.card-heading span');
cardHeading.forEach((card, index) => {
    card.innerHTML = contents[0].cards[index].heading;
})

const cardDescription = document.getElementById('card').querySelectorAll('.card-description span');
cardDescription.forEach((card, index) => {
    card.innerHTML = contents[0].cards[index].description;
})

const cardImage = document.getElementById('card').querySelectorAll('img');
cardImage.forEach((card, index) => {
    card.outerHTML = `<img class="card-img" src="./assets/img/${contents[0].cards[index].image}" alt="">`;
})