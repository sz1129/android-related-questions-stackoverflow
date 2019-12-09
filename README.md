# android-related-questions-stackoverflow
It is a Scrapy project written in Python. It aims at crawl the stackoverflow and extract questions that are related to android. The range of the questions are one week. 
Ten most voted questions in the past week along with ten most recent are extracted into either a json or excel file by different command. Json file is chosen here since json file can be used in the future. 
So command "scrapy crawl stackoverflow-python-spider -o stack.json" under folder stackoverflow be excuted and there are 20 different question data in the stack.jason.
