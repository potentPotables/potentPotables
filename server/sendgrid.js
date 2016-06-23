const sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY);
const helper = require('sendgrid').mail

exports.sendEmail = function(props) {
	from_email = new helper.Email(props.email);
	to_email = new helper.Email(props.recipient);
	subject = props.name + ' from ' + props.company;
	content = new helper.Content("text/plain", props.message);
	mail = new helper.Mail(from_email, subject, to_email, content);
	
	var requestBody = mail.toJSON();
	var request = sg.emptyRequest();
	request.method = 'POST';
	request.path = '/v3/mail/send';
	request.body = requestBody;
	sg.API(request, function (response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});
}