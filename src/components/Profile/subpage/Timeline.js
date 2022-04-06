import React, {useState, useEffect} from 'react'
// import Moment from "react-moment";
import moment from "moment";
import { Icon, Segment, Statistic } from 'semantic-ui-react';

export default function Timeline() {


  const [diffExp, setDiffExp] = useState([])
  const [totalDays, setTotalDays] = useState([])

  const [clockHours, setClockHours] = useState(0)
  const [clockMinutes, setClockMinutes] = useState(0)
  const [clockSeconds, setClockSeconds] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    findTotalDays();
    findDiffDate();
    findDiffTime();

    const intervalId = setInterval(() => {findDiffTime()}, 1000);
    
    return () => {
      clearInterval(intervalId)
    }
  }, [clockSeconds])

  const findTotalDays = () => {
    var now = moment(new Date()); //now
    var start = moment('2018-12-17T09:00:00');
    setTotalDays(now.diff(start, 'days'))
  }

  const findDiffDate = () => {
    var currentDate = moment(new Date());
    var startDate = moment("2018-12-17T09:00:00");

    var years = currentDate.diff(startDate, 'year');
    startDate.add(years, 'years');

    var months = currentDate.diff(startDate, 'months');
    startDate.add(months, 'months');

    var days = currentDate.diff(startDate, 'days');

    setDiffExp([
      { 
        Years: years,
        Months: months,
        Days: days 
      },
    ])
  }

  const findDiffTime = () => {
    //Diff Time
    var currentTime = new Date();
    var startTime = new Date("2018-12-17T09:00:00");

    var currentHours = currentTime.getHours()*60*60*1000
    var currentMinutes = currentTime.getMinutes()*60*1000
    var currentSeconds = currentTime.getSeconds()*1000
    var currentMiliseconds = currentHours + currentMinutes + currentSeconds + 86400000

    var startHours = startTime.getHours()*60*60*1000
    var startMinutes = startTime.getMinutes()*60*1000
    var startSeconds = startTime.getSeconds()*1000
    var startMiliseconds = startHours + startMinutes + startSeconds

    var diff = Math.abs(currentMiliseconds-startMiliseconds)
    
    let timeInMiliseconds = diff
    let hours, minutes, seconds;

    hours = Math.floor((timeInMiliseconds / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((timeInMiliseconds / (1000 * 60)) % 60);
    seconds = Math.floor((timeInMiliseconds / 1000) % 60);

    // console.log(`${hours}:${minutes}:${seconds}`);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    setClockHours(hours)
    setClockMinutes(minutes)
    setClockSeconds(seconds)
  }
    
  return (
    <div>
      <React.Fragment>
        <div className="myproj-container">
          <div className="myproj-content">
            <div className="header-tag-box">
              <div className="header-tag">
                TIMELINE
              </div>
            </div>

            <div className="timeline-box">
              <div className="timeline-header">
                EDUCATION
              </div>

              <div className="timeline-tag">
                <div className="timeline-subheader">
                  Bachelor Degree of Computer Science 
                  <br/>
                  Khon Kaen University
                </div>
                <div className="timeline-subtext">
                  2014 - 2018
                </div>

                <br/>

                <div className="timeline-subtext">
                  <Icon name="bookmark"/>
                  Award
                  <br/>
                  Iris Detection And Recognition Segmentation using Daugman's integro differential operator
                  <br/>
                  The 6 th ASEAN Undergraduate Conference in Computing (AUCC 2018), KMITL
                </div>
              </div>
            </div>


            <div className="timeline-box">
              <div className="timeline-header">
                WORK  EXPERIENCE
              </div>

              <div className="timeline-tag">
                <div className="timeline-subheader">
                  Internet Thailand Public Company Limited
                </div>

                <div className="timeline-subheader">
                  Software Engineer
                </div>

                <div className="timeline-subtext">
                  December 17, 2018 - Present
                </div>

                <br/>
                
                <Statistic size='mini' horizontal>
                  <Statistic.Value><Icon name='calendar outline' /> {Math.ceil(totalDays)}</Statistic.Value>
                  <Statistic.Label>Days</Statistic.Label>
                </Statistic>

                <Segment inverted>
                  <Statistic.Group size='mini' inverted className="timeline-statistic-wrap">
                    <Statistic horizontal style={{ marginRight: '0px' }} className="timeline-statistic-space">
                      <Statistic.Value>{diffExp[0] && diffExp[0].Years}</Statistic.Value>
                      <Statistic.Label>Years</Statistic.Label>
                    </Statistic>
                    <Statistic horizontal className="timeline-statistic-space">
                      <Statistic.Value>{diffExp[0] && diffExp[0].Months}</Statistic.Value>
                      <Statistic.Label>Months</Statistic.Label>
                    </Statistic>
                    <Statistic horizontal className="timeline-statistic-space">
                      <Statistic.Value>{diffExp[0] && diffExp[0].Days}</Statistic.Value>
                      <Statistic.Label>Days</Statistic.Label>
                    </Statistic>
                    <Statistic horizontal className="timeline-statistic-space">
                      <Statistic.Value>{parseInt(clockHours, 10)}</Statistic.Value>
                      <Statistic.Label>Hours</Statistic.Label>
                    </Statistic>
                    <Statistic horizontal className="timeline-statistic-space">
                      <Statistic.Value>{parseInt(clockMinutes, 10)}</Statistic.Value>
                      <Statistic.Label>Minutes</Statistic.Label>
                    </Statistic>
                    <Statistic horizontal className="timeline-statistic-space" color='red'>
                      <Statistic.Value style={{ color: 'red' }}>{parseInt(clockSeconds, 10)}</Statistic.Value>
                      <Statistic.Label>Seconds</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                </Segment>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}
