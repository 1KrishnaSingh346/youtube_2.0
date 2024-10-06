import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import {Link} from "react-router-dom";
import {BsFillCheckCircleFill} from "react-icons/bs"

import VideoLength from '../shared/videoLength';

const SuggestionVideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
        <div className='flex mb-3'>
          <div className='relative h-24 lg:h-20 xl:h-24 w-40 min-w-[160px] lg:w-32 lg:min-w-[120px] xl:w-40 xl:min-w-[160px] rounded-xl bg-slate-800 overflow-hidden'>
            <img src={video?.thumbnails?.[0]?.url} alt="" />
            {video.lengthSeconds && (<VideoLength time ={video.lengthSeconds}/>)}
          </div>
         {/* Description of video name */}
         <div className='flex flex-col ml-3 overflow-hidden'>
              <span className ='text-sm lg:text-xs xl:text-sm line-clamp-2 text-white'>
                { video?.title }
              </span>
              {/* CheckMark whether channel is verified or not ✅ */}
              <span className='text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-white[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1'/>)}
              </span>
              {/* For number of views got on the video and the publish date */}
              <div className='flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                <span className='flex text-[20px] leading-none font-bold text-white/[0.7] relative top[-10px] mx-1'>.</span>
                <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
            </div>
        </div>
      </Link>
  )
}

export default SuggestionVideoCard
