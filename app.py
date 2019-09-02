#from flask import Flask,render_template,request,jsonify
import tweepy
from textblob import TextBlob


# authenticate the twitter API
consumer_key = ''
consumer_secret = ''

access_token = ''
access_token_secret = ''

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)


#app = Flask(__name__)


search_tweet = "virat"
tweets = api.search(search_tweet,tweet_mode='extended')
for tweet in tweets:
    polarity = TextBlob(tweet.full_text).sentiment.polarity
    subjectivity = TextBlob(tweet.full_text).sentiment.subjectivity
    print(tweet.full_text,polarity,subjectivity)





