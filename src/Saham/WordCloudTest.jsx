import React from 'react'
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import {
    Card,
    CardHeader,
    CardBody, Container
} from "shards-react";

export const WordCloudTest = () => {

    const data = [
        { text: 'سلام', value: 1000 },
        { text: 'علیک', value: 200 },
        { text: 'بد', value: 800 },
        { text: 'خوب', value: 1000000 },
        { text: 'هستی', value: 10 },
    ];
    
    return (
        <Card small className="h-100">
            <CardHeader>ابر کلمات مثبت</CardHeader>
            <CardBody className="pt-0">
                <WordCloud data={data} width={500}
                    height={500}
                    font="cinema"
                    fontStyle="italic"
                    fontWeight="bold"
                    fontSize={(word) => Math.log2(word.value) * 2}
                    spiral="rectangular"
                    rotate={(word) => word.value % 360}
                    padding={5}
                    random={Math.random} />
            </CardBody>
        </Card>

    )
}
