from flask import Flask, jsonify
from datetime import datetime, timedelta
import time
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def random_date_within_year():
    start = datetime.now()
    end = start + timedelta(days=365)
    return start + (end - start) * random.random()


@app.route('/events', methods=['GET'])
def get_events():

    # Test Data need to set up a database to store events
    events = [
        {
            "title": "Student Lunch Picnic",
            "category": "School",
            "color": "#FF0000",
            "start": int(time.mktime(random_date_within_year().timetuple())),
            "end": int(time.mktime((random_date_within_year() + timedelta(hours=2)).timetuple()))
        },
        {
            "title": "Culture Day",
            "category": "School",
            "color": "#00FF00",
            "start": int(time.mktime(random_date_within_year().timetuple())),
            "end": int(time.mktime((random_date_within_year() + timedelta(hours=2)).timetuple()))
        },
        {
        "title": "University Holiday",
        "category": "School",
        "color": "#0000FF",
        "start": int(time.mktime(random_date_within_year().timetuple())),
        "end": int(time.mktime((random_date_within_year() + timedelta(hours=2)).timetuple()))
        }
    ]
    

    # Group events by date
    grouped_events = {}
    for event in events:
        date = datetime.fromtimestamp(event['start']).strftime('%Y-%m-%d')
        if date not in grouped_events:
            grouped_events[date] = []
        grouped_events[date].append(event)

    # Convert to format
    dates = []
    for date_str, events_list in grouped_events.items():
        date_obj = datetime.strptime(date_str, '%Y-%m-%d')
        dates.append(
            {
            "date": int(time.mktime(date_obj.timetuple())),
            "events": events_list
            }
        )

    response = {"dates": dates}
    return jsonify(response)

# Loca Host
if __name__ == '__main__':
    app.run(debug=True)

'''
# Cross Network Host remember to change the IP address to your own IP address
if __name__ == '__main__':
    app.run(host='192.168.0.127', port=5000,debug=True)
'''
