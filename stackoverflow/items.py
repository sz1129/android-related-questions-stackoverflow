# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class StackoverflowItem(scrapy.Item):
    title = scrapy.Field()
    time = scrapy.Field()
    votes = scrapy.Field()
    tags = scrapy.Field()
    link = scrapy.Field()
    
    
