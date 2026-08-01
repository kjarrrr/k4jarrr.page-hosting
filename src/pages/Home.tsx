import MainContent from '../components/MainContent'
import LinksWindow from '../components/LinksWindow'
import WorkWindow from '../components/WorkWindow'
import LinksDialog from '../components/LinksDialog'
import WorkDialog from '../components/WorkDialog'

import { useDialog } from '../hooks/useDialog'

export function Home() {
  
 const links = useDialog()
  const work = useDialog()

  return (
    <>
    
      <div className="gigaContainer">
        <MainContent />
        <LinksWindow onOpen={links.open} />
        <WorkWindow onOpen={work.open} />
        <LinksDialog isOpen={links.isOpen} onClose={links.close} />
        <WorkDialog isOpen={work.isOpen} onClose={work.close} />
      </div>
    </>
  );
}

