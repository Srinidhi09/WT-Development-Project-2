function myFunction()
{
	document.getElementById("infoo").style.display='inherit';
}

function myFunction1() 
{
	confirm("Are you sure?");
}

$(document)
.ready(
		function() {
			$("div").click(function() {
				$("#anim").animate({
					right : '250px'
				});
			});

			$("#obj")
					.click(
							function() {
								$("#objective")
										.html(
												"Graduate in Information Systems Management actively seeking spring internships to better enhance my skills. An aspiring individual aiming to help achieve company goals and objectives")
							});

			$("#tech").hover(function() {
				$("#tech").toggleClass("skil");
			});

			$("#education").hover(function() {
				$("li").each(function() {
					$(this).toggleClass("skil");
				});
			});

		});
