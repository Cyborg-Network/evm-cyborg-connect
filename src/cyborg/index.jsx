import Header from './layouts/Header'
import Dashboard from './components/provideCompute/Dashboard'
import SideBar from './layouts/SideBar'
import ChooseServices from './components/accessCompute/ChooseServices'
import ChoosePath from './ChoosePath'
import { SERVICES, DEPLOY_STATUS, useCyborgState, DASH_STATE } from '../dapp-context/CyborgContext'
import LoadDeployCyberDock from './components/accessCompute/modals/LoadDeployCyberDock'
import ComputeProviderStatus from './components/provideCompute/ComputeProviderStatus'

function CyborgDapp() {
   const { selectedPath, service, serviceStatus, dashboard } = useCyborgState()
  return (
    <div className='max-h-screen flex flex-col bg-red-500'>
        { !selectedPath? (
            <><Header /><ChoosePath /></>
        ): (
            (selectedPath === 'PROVIDER' || service === SERVICES.CYBER_DOCK)? (
                <div className='flex relative'>
                    <div className='fixed top-0 left-0 w-80'>
                        <SideBar />
                    </div>
                    <div className='w-full ml-80'>
                        {dashboard.section === null || dashboard.section === DASH_STATE.HOME? <Dashboard />: 
                            <ComputeProviderStatus />
                        }
                    </div>
                    {
                        service === SERVICES.CYBER_DOCK && serviceStatus.deployTask === DEPLOY_STATUS.PENDING? (
                            <div className='h-full w-full absolute z-10'>
                                <LoadDeployCyberDock />
                            </div>
                        ) : (<></>)
                    }
                </div>
            ) : (
                <><Header /><ChooseServices /></>
            )
        )}
    </div>
  )
}

export default CyborgDapp