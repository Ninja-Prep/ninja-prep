import React from 'react'
import { QuestionListDesktop } from './QuestionListDesktop'
import { QuestionListTablet } from './QuestionListTablet'
import { QuestionListMobile } from './QuestionListMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const QuestionListComponent = () => (
	<div>
		<Desktop>
			<QuestionListDesktop />
		</Desktop>
		<Tablet>
			<QuestionListTablet />
		</Tablet>
		<Mobile>
			<QuestionListMobile />
		</Mobile>
	</div>
)

export default QuestionListComponent
export { default as QuestionListComponent } from './QuestionListComponent'
