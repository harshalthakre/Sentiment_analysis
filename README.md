# Sentiment_analysis
Search tweets with different sentiments

### What is Sentiment Analysis ?
> <b> *"Sentiment analysis is basically the process of determining the attitude or the emotion of the writer (sentence,statement),i.e., whether it is positive or negative or neutral."* </b> <br><br>
Sentiment analysis can be used to identify the customer or follower's attitude towards a brand through the use of variables such as context, tone, emotion, etc. Marketers can use sentiment analysis to research public opinion of their company and products, or to analyze customer satisfaction. Organizations can also use this analysis to gather critical feedback about problems in newly released products.
> Sentiment analysis helps companies understand how they’re doing with their customers. <br>
For example, if your company has 20% negative sentiment, is that bad? It depends. If your competitors have a roughly 50% positive and 10% negative sentiment, while yours is 20% negative, that merits more discovery to understand the drivers of these opinions. Knowing the sentiments associated with competitors helps companies evaluate their own performance and search for ways to improve. <br> <br>
We will be using tweets on <b>*"Twitter"*</b> to analyze sentiments . Twitter is the best Psychology tool out there . Twitter is a treasure trove of 
sentiment . People around the world output thousands of recations and opinions on every topic under the sun every second every day . Let's leverage those tweets and analyze the data with power of machine learning .

In this example , we will be using 
- <b>"textblob"</b> as our Natural Language Processing ToolKit to analyze the sentiments of written statement 
- <b>"tweepy"</b> an easy-to-use Python library for accessing the Twitter API 
- <b>"flask"</b> as our web application framework.

### Tweepy
Step 1 : Install tweepy as our dependecy 
```
$ pip install tweepy
```

Step 2 : Setup Twitter developer account and Get Tokens <br>
<br>
To have access to the Twitter API, you'll need to login the Twitter Developer website and create an application. Enter your desired Application Name, Description. After registering, create an access token and grab your application’s Consumer Key, Consumer Secret, Access token and Access token secret from Keys and Access Tokens tab
<p align="left">
  <img src="https://i.postimg.cc/XNTjv6KV/t-dev.jpg" width="500px" alt="">
</p>

Step 3 : Authenticate your application and get tweets <br> <br>
Following code snippet is the basic example of how you can authenticate your app and get tweets from twitter
```
import tweepy
# authenciate by putting respective keys
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

# Get twitter api
api = tweepy.API(auth)

# enter topic
search_tweet = " Kashmir"

# display tweets
public_tweets = api.search(search_tweet,tweet_mode='extended')
for tweet in public_tweets:
    print(tweet.text)
```

Now as we have got tweets , we will use textBlob to perform sentiment analyze on these tweets .

### TextBlob
TextBlob is a Python (2 and 3) library for processing textual data.It is built on the shoulders of <b>"NLTK"</b> and Pattern and provides a consistent API for diving into common natural language processing (NLP) tasks such as part-of-speech tagging, noun phrase extraction, sentiment analysis, and more.

Step 1 : Install tweepy as our dependecy 
```
$ pip install textblob
```
Step 2 : Use sentiment function of textblob returns to get polarity, and subjectivity. <br>
The sentiment function of textblob returns two properties, <b>polarity </b>, and <b>subjectivity</b>. <br>
- <b>"Polarity"</b> is float which lies in the range of [-1,1] where 1 means positive statement and -1 means a negative statement
- <b>"Subjectivity"</b> is also a float which lies in the range of [0,1] Subjective sentences generally refer to personal opinion, emotion or judgment whereas objective refers to factual information . 
- High Subjectivity >> Opiniated Statement 
- Low Subjectivity >> Factual Statement
- High Polarity >> Positive Statement
- Low Polarity >> Negative Statement
<br> <br>
```
import tweepy

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

search_tweet = " Kashmir"
public_tweets = api.search(search_tweet,tweet_mode='extended')
for tweet in public_tweets:
    print(tweet.text)
    polarity = TextBlob(tweet.full_text).sentiment.polarity # textblob sentiment function
    subjectivity = TextBlob(tweet.full_text).sentiment.subjectivity # textblob sentiment function
    print(polarity)
    print(subjectivity)
```
