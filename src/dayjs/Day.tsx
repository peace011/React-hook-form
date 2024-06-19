import React from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import relativeTime from  'dayjs/plugin/relativeTime'
import calendar from 'dayjs/plugin/calendar'
import isBetween from 'dayjs/plugin/isBetween'
import localeData from 'dayjs/plugin/localeData'

const Day = () => {
    //shows current date
    var now=dayjs();

    //sets hour to 12 
    var date=dayjs().hour(12);
    
    // var date=
    // dayjs('2018-04-04T16:00:00.000Z')
    // dayjs('2018-04-13 19:18:17.040+02:00')
    // dayjs('2018-04-13 19:18')
    // dayjs("12-25-1995")

    //add and subtract the day from todays date
    var a= dayjs();
    const b =
        //  a.add(7, 'day')   //adds 7 days etra to current date
        a.subtract(7, 'day')   //adds 7 days etra to current date
    console.log('a',a);
    console.log("b",b);

    const starttime=dayjs().endOf('month');   //shows the end of montht eoth time as if June then 30 June 23:59:59
    console.log("starttime",starttime);

    //UTC time
    dayjs.extend(utc);
    const utcDate=dayjs.utc();
    console.log("utcDate",utcDate.format());

    //From to To (2 years ago)
    dayjs.extend(relativeTime);
    const relativetime=dayjs('2023-01-01').fromNow(true);
    const toTime=dayjs().to('2026-01-01');
    console.log("toTime",toTime);
    
    //calender ma dayjs().calendar(referenceDate, formatsObject)
    dayjs.extend(calendar);
    const calender=dayjs().calendar(dayjs("2024-06-17"));  //reference date / pointn of comparison to current date
                                                        //as today is 18 but it will take 17 as current date and shows tomorrow
   const calenderDay= dayjs().calendar(null,{
        sameDay: "[Today at] h:mm A", // The same day ( Today at 2:30 AM )
  nextDay: "[Tomorrow at] h:mm A", // The next day ( Tomorrow at 2:30 AM )
  nextWeek: "dddd [at] h:mm A", // The next week ( Sunday at 2:30 AM )
  lastDay: "[Yesterday at] h:mm A", // The day before ( Yesterday at 2:30 AM )
  lastWeek: "[Last] dddd [at] h:mm A", // Last week ( Last Monday at 2:30 AM )
  sameElse: "DD/MM/YYYY", // Everything else ( 17/10/2011 )
    })
    console.log("calender",calender);   //today date
    console.log("calenderDay",calenderDay);  

    //checks if the date 2010-10-20 comes between the 19 and 25 date and checks specific part day
    dayjs.extend(isBetween);
    const betweenDay=dayjs("2010-10-20").isBetween("2010-10-19", dayjs("2010-10-25"), "day");
    console.log("betweenDay",betweenDay); //returns true


    //localedata
    dayjs.extend(localeData);
    const globalLocaleData = dayjs.localeData();
    console.log("firstDayOfWeek",globalLocaleData.firstDayOfWeek());
    console.log("months",globalLocaleData.months());
    console.log("monthsShort",globalLocaleData.monthsShort());
    console.log("weekdays",globalLocaleData.weekdays());
    console.log("weekdaysShort",globalLocaleData.weekdaysShort());
    console.log("weekdaysMing",globalLocaleData.weekdaysMin());
    // console.log("longDateFormat",globalLocaleData.longDateFormat("L"));
    

  return (
    <div>

    </div>
  )
}

export default Day