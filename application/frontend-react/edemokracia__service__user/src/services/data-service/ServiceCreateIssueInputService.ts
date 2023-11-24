//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceDistrictQueryCustomizer,
  ServiceCreateIssueInput,
  ServiceDistrict,
  ServiceCountyQueryCustomizer,
  ServiceCity,
  ServiceIssueTypeQueryCustomizer,
  ServiceCreateIssueInputStored,
  ServiceDistrictStored,
  ServiceCountyStored,
  ServiceCounty,
  ServiceCityStored,
  ServiceIssueTypeStored,
  ServiceIssueType,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceCreateIssueInput
 */
export interface ServiceCreateIssueInputService {
  getTemplate(): Promise<ServiceCreateIssueInput>;
  getTemplateForIssueType(): Promise<ServiceIssueType>;
  getIssueType(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;
  getRangeForIssueType(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;
  getTemplateForCounty(): Promise<ServiceCounty>;
  getCounty(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getRangeForCounty(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplateForCity(): Promise<ServiceCity>;
  getCity(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getRangeForCity(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForDistrict(): Promise<ServiceDistrict>;
  getDistrict(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForDistrict(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
}
