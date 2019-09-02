from flask import Flask,render_template,request,jsonify
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


app = Flask(__name__)




