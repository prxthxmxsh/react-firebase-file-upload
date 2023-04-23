import React from 'react'
import NavbarComponent from './Navbar'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import AddFolderButton from './AddFolderButton'
import { useFolder } from '../../hooks/useFolder'
import Folder from './Folder'
import { useParams,useLocation } from "react-router-dom"
import FolderBreadcrumbs from './FolderBreadcrumbs'


export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  // const {folder,childFolders}=useFolder(folderId,state.folder)
  const { folder, childFolders } = useFolder(folderId, state !== null ? state.folder : undefined);

  console.log(state)
  return (
    <div>
      <NavbarComponent/>
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
} 