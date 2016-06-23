const sg = require('sendgrid').SendGrid('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');
const helper = require('sendgrid').mail

exports.sendEmail = function(props, recipient) {
	from_email = new helper.Email(props.email);
	to_email = new helper.Email(recipient);
	subject = props.name + ' from ' + props.company;
	content = new helper.Content("text/plain", props.message);
	mail = new helper.Mail(from_email, subject, to_email, content);
	
	var requestBody = mail.toJSON();
	var request = sg.emptyRequest();
	request.method = 'POST';
	request.path = '/v3/mail/send';
	request.body = requestBody;
	sg.API(request, function (response) {
	  console.log(response.statusCode)
	  console.log(response.body)
	  console.log(response.headers)
	});
}