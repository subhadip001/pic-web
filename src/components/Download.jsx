import React from 'react'
import { NavLink } from 'react-router-dom'

const Download = (props) => {
    return (
        <>
            <div className='block mr-auto my-10 '>
                <a href={props.downloadLink} download={props.heading} className=' inline-flex rounded-lg items-center p-4  border-PIC-Blue border  '>
                       <svg width="50" height="71" viewBox="0 0 58 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.45975 0.000699154C0.668048 0.0755501 -0.00400964 0.817313 1.80102e-05 1.61419V58.0914C1.80102e-05 58.9361 0.767559 59.7049 1.61093 59.7049H22.4296C25.2575 66.334 31.8311 71 39.4723 71C46.8561 71 53.2409 66.6665 56.2129 60.3852C56.6703 59.617 56.3298 58.4886 55.524 58.1025C54.7183 57.7164 53.6276 58.1599 53.318 58.9984C50.8659 64.1822 45.5976 67.7723 39.473 67.7723C31.0012 67.7723 24.1679 60.9282 24.1679 52.4428C24.1679 43.9575 31.0011 37.1132 39.473 37.1132C47.9447 37.1132 54.778 43.9573 54.778 52.4428C54.7662 53.2954 55.5377 54.0793 56.3889 54.0793C57.2402 54.0793 58.0122 53.2953 57.9999 52.4428C57.9999 43.6013 51.7792 36.1897 43.5003 34.3398V14.5224C43.5037 14.093 43.3273 13.6647 43.0222 13.3624L30.1334 0.453093C29.8334 0.163258 29.4175 -0.00333512 29.0006 5.06258e-05H1.46158L1.45975 0.000699154ZM3.22185 3.22768H27.3877V14.5228C27.3877 15.3676 28.1553 16.1363 28.9986 16.1363H40.2758V33.9122C40.01 33.901 39.7392 33.8875 39.47 33.8875C37.5826 33.8875 35.7498 34.1914 34.0325 34.7193C33.941 34.7029 33.8483 34.6945 33.7555 34.6945H8.86035H8.7092C7.86524 34.7339 7.13367 35.5387 7.17294 36.384C7.21228 37.2294 8.01635 37.9621 8.85981 37.9222H27.9652C26.5161 39.0748 25.2395 40.4266 24.1893 41.9563H8.85981H8.70866C7.86469 41.9957 7.13313 42.8005 7.1724 43.6458C7.21173 44.4911 8.0158 45.2239 8.85926 45.184H22.4273C21.8817 46.4626 21.4664 47.8116 21.2192 49.2181H8.8592H8.70805C7.86409 49.2575 7.13252 50.0622 7.17179 50.9076C7.21112 51.7529 8.0152 52.4857 8.85866 52.4458H20.9416C20.9416 53.8313 21.1057 55.1799 21.3945 56.4798H3.21972V3.22993L3.22185 3.22768ZM30.6099 5.49685L38.0105 12.9093H30.6099V5.49685ZM8.70952 27.4322C7.86555 27.4716 7.13399 28.2764 7.17326 29.1217C7.21259 29.9671 8.01666 30.6998 8.86012 30.6599H34.6371C35.4883 30.6717 36.271 29.899 36.271 29.0464C36.271 28.1938 35.4883 27.4205 34.6371 27.4329H8.86012C8.80955 27.4307 8.75955 27.4307 8.70897 27.4329L8.70952 27.4322ZM39.2938 43.5426C38.502 43.6298 37.8418 44.384 37.8587 45.1814V55.7963L35.7696 53.7039C35.4342 53.3594 34.9386 53.1782 34.4604 53.2249C33.8502 53.2846 33.2939 53.7241 33.0933 54.3044C32.8933 54.8846 33.0602 55.5746 33.5035 55.9984L38.337 60.839C38.9326 61.4288 40.0069 61.4288 40.6025 60.839L45.436 55.9984C46.0546 55.4086 46.0715 54.3026 45.4708 53.6944C44.8702 53.0861 43.7655 53.091 43.1705 53.7039L41.0814 55.7963V45.1815C41.1011 44.2664 40.2026 43.4425 39.294 43.5426L39.2938 43.5426Z" fill="#FF5300" />
                </svg>
                <p className=' ml-4 text-2xl font-medium'>{`Click to download ${props.heading}`}</p>
                    </a> 
             

            </div>
        </>
    )
}

export default Download