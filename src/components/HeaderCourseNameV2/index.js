import React from 'react'
import { string } from 'prop-types'

const HeaderCourseNameV2 = ({ instructorName, courseName }) => (
  <div className='header-v2__course-wrapper'>
    {instructorName &&
      <span className='header-v2__instructor-name'>{instructorName}</span>
    }
    {courseName &&
      <span className='header-v2__course-name'>{courseName}</span>
    }
  </div>
)

HeaderCourseNameV2.propTypes = {
  instructorName: string,
  courseName: string,
}

export default HeaderCourseNameV2
