import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import json


def send_email(subject, body, to_email):
    # Email details

    from_email = "yourmail@gmail.com"
    from_password = "password"
    smtp_server = "smtp.gmail.com"
    smtp_port = 587  # Usually 587 for TLS, 465 for SSL

    web_usage = json.loads(body)

    # Create a sorted list of tuples (site, usage)
    sorted_web_usage = sorted(web_usage.items(), key=lambda x: x[1], reverse=True)

    # Create a presentable text
    email_text = "Web Usage Report:\n\n"
    email_text += "Here is the summary of your web usage:\n\n"

    for site, usage in sorted_web_usage:
        email_text += f"{site}: {usage} Minutes\n"

    email_text += "\nBest regards,\nYour Web Usage Tracker"

    # Create message
    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject

    # Add body to email
    msg.attach(MIMEText(email_text, 'plain'))

    try:
        # Connect to the server
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()  # Upgrade to secure connection
        server.login(from_email, from_password)

        # Send the email
        server.sendmail(from_email, to_email, msg.as_string())
        print("1 Email sent successfully!")

    except Exception as e:
        print(f"Failed to send email: {e}")

    finally:
        server.quit()
