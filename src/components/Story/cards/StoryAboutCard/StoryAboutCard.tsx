import { InfoIcon } from 'lucide-react'

import styles from './StoryAboutCard.module.css'

import { EmptyState } from '@/components/EmptyState'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { P } from '@/components/ui/Typography'

type Props = {
  name: string
  about: string[]
}

export function StoryAboutCard({ name, about }: Props) {
  return (
    <Card>
      <CardHeader>
        <P
          size='xl'
          weight='semi-bold'
          transform='capitalize'
          className={styles.uiFont}
        >
          {name}'s about
        </P>
      </CardHeader>
      <CardContent>
        {
          about.length > 0 ?
            <div className={styles.aboutCardDescriptions}>
              {about.map((item, i) => (
                <P key={i}>{item}</P>
              ))}
            </div> :
            <EmptyState
              icon={<InfoIcon />}
              message={`The author hasn't shared more details yet, but the story awaits!`}
            />
        }
      </CardContent>
    </Card>
  )
}
