from flask import Flask,render_template,request,jsonify
import tweepy
from textblob import TextBlob


# authenticate the twitter API
consumer_key = 'QavlJyMXE3J18OWfp0tRAImWL'
consumer_secret = 'AyB6xE3ZeoCFn1sydHMokFV78saKLQzschp3HuRBmVIYjvaXUH'

access_token = '2626997796-TIcpSf1NVQI114H6HRLDkxWI5AODiib0H1IHfds'
access_token_secret = '6gewIMCTWzlBz7r30En6zPJXeB33tL3uc2gYgqYg1tN95'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)


app = Flask(__name__)


# rest handlers
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/search",methods=["POST"])
def search():
    search_tweet = request.form.get("search_query")
    t = []
    tweets = api.search(search_tweet, tweet_mode='extended')
    for tweet in tweets:
        polarity = TextBlob(tweet.full_text).sentiment.polarity
        subjectivity = TextBlob(tweet.full_text).sentiment.subjectivity
        t.append([tweet.full_text,polarity,subjectivity])
        print(tweet.full_text,polarity,subjectivity)
        # t.append(tweet.full_text)

    return jsonify({"success":True,"tweets":t})






