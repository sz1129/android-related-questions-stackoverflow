# -*- coding: utf-8 -*-
import scrapy



class StackoverflowPythonSpiderSpider(scrapy.Spider):
    name = 'stackoverflow-python-spider'
    allowed_domains = ['stackoverflow.com']
    # 10 newest questions
    start_urls = ['https://stackoverflow.com/questions/tagged/android?sort=newest&days=7']

    def parse(self, response):
        for href in response.css('.question-summary h3 a::attr(href)')[:10]:
            full_url = response.urljoin(href.extract())
            yield scrapy.Request(full_url, callback=self.parse_question)
        # 10 most voted questions in the past week
        secondPage = 'https://stackoverflow.com/questions/tagged/android?sort=MostVotes&days=7'
        yield scrapy.Request(secondPage, callback=self.parse)
        
    def parse_question(self, response):
        
        yield{
            'title':response.css('h1 a::text').extract()[0],
            'time':response.css('.question .relativetime::text').extract(),
            'votes':response.css('.vote-count-post > strong::text').extract(),
            'tags':response.css('.question .post-tag::text').extract(),
            'link':response.url,
            
        }   
       
            