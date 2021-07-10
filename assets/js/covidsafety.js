
var contents =  [
{
    heading: "Du lịch trở lại một cách an toàn hơn",
    subHeading: "Luôn cập nhật các mẹo mới nhất để điều chỉnh kế hoạch du lịch trong giai đoạn dịch COVID-19 cũng như sau này.",
},
{
    heading: "Đảm bảo an toàn là trách nhiệm chung",
    subHeading: "Chúng tôi đang yêu cầu cộng đồng Airbnb cam kết thực hiện các biện pháp bảo vệ sức khỏe và an toàn trong đại dịch COVID-19 mới nhất của chúng tôi.",
},
{
    heading: "Tiêu chuẩn cao hơn đối với mọi chỗ ở",
    subHeading: "Quy trình vệ sinh tăng cường 5 bước của chúng tôi có tham khảo ý kiến chuyên gia và có yêu cầu cao hơn so với quy trình vệ sinh cơ bản. Đây là một bước quan trọng trong việc giúp đảm bảo sự an toàn của cộng đồng.",
},
{
    heading: "Không gian riêng, tránh xa nơi đông người",
    subHeading: "Nhà riêng. Nhận phòng không tiếp xúc. Không gian ngoài trời rộng rãi. Không gian thoáng đãng. Tìm kiếm chỗ ở có các tiện nghi quan trọng nhất đối với bạn.",
},
{
    heading: "Giải đáp thắc mắc của bạn",
    subHeading: "",
},
{
    heading: "Tài nguyên khác",
    subHeading: "",
},
];


const contentsHtml = contents.map(content => 
    {   
        return `
        <div class="content">
            <div class="content-heading">
                <span>
                    ${content.heading}
                </span>
            </div>
            ${content.subHeading !== "" ? `
            <div class="content-sub-heading">
                <span>
                    ${content.subHeading}
                </span>
            </div>` : ''}
        </div>
        `
    });

document.getElementById('container').innerHTML = contentsHtml;
