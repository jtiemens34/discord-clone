import {
  AppRouterContext,
  AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { CreateServerModal } from "@/components/modals/create-server-modal"

describe("Create Server Modal Tests", () => {
  const router = AppRouterContext
  it("mounts", () =>{
    cy.mount(<CreateServerModal />)
  })
})