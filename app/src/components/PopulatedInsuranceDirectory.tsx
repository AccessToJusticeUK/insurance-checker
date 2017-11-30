import { withInsuranceData } from '../containers/withInsuranceData';
import { TabbedDirectory } from 'shared-form-app';

export const PopulatedInsuranceDirectory = withInsuranceData(TabbedDirectory);
