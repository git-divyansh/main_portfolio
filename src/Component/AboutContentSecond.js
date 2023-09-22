import React from 'react'
import data from "./EduData";
import certData from './CertData';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Collapse from "rc-collapse";
import {BiSolidBook} from "react-icons/bi";
import {PiCertificateBold} from "react-icons/pi";
import "rc-collapse/assets/index.css";
import 'react-vertical-timeline-component/style.min.css';
import "./AboutContentSecond.css"
import 'react-accessible-accordion/dist/fancy-example.css';

const AboutContentSecond = () => {
    const Panel = Collapse.Panel;    
  return (
    <div className='timeline'>
            <div className='timeline-cert'>
                <h3>Certification</h3>
                <VerticalTimeline 
                layout='1-column' 
                lineColor='#ffdd40'
            >
                {
                    certData.map((val, idx)=>{
                        return(
                            <VerticalTimelineElement key={idx} contentStyle={{background : "#0F0F0F"}} icon={<PiCertificateBold/>}>
                                <div className='timline-card-wrapper'>
                                    <h3>{val.name}</h3>
                                    <h4>{val.date}</h4>
                                        <p className='no-accordion' style={{color : 'white'}}>{val.description}</p>
                                        <div className='accordion'>
                                        <Collapse accordion={true} className='timeline-header'>
                                            <Panel header={"Details"} headerClass="my-header-class">
                                                {val.description}
                                            </Panel>
                                        </Collapse>
                                        </div>
                                    <h4 style={{paddingTop : "1rem", marginBottom : "0"}}><a href={val.vist}>Visit</a></h4>
                                </div>
                            </VerticalTimelineElement>
                        )
                    })
                }    
            </VerticalTimeline>
            </div>
        <div className='timeline-edu'>
            <h3>Education</h3>
            <VerticalTimeline 
                layout='1-column' 
                lineColor='#ffdd40'
            >
                {
                    data.map((val, idx)=>{
                        return(
                            <VerticalTimelineElement key={idx} contentStyle={{background : "rgb(248, 217, 15)"}} icon={<BiSolidBook style = {{color : "white"}}/>}>
                                <div className='timline-card-wrapper'>
                                    <h3>{val.course}</h3>
                                    <h4>{val.institution}</h4>
                                    <p>{val.Location}</p>
                                    <p>{val.completed}</p>
                                </div>
                            </VerticalTimelineElement>
                        )
                    })
                }    
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default AboutContentSecond;