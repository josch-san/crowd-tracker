import json

def handler(event, context):
    event.pop('request')

    print(json.dumps(event))
    return True
