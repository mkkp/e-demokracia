//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceCreateIssueInput
 */
export interface ServiceCreateIssueInputService {
  getTemplate(): Promise<JudoRestResponse<ServiceCreateIssueInput>>;
  getTemplateForCity(): Promise<JudoRestResponse<ServiceCity>>;
  getCity(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getRangeForCity(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  setCity(
    owner: JudoIdentifiable<ServiceCreateIssueInput>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  unsetCity(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<JudoRestResponse<void>>;
  getTemplateForCounty(): Promise<JudoRestResponse<ServiceCounty>>;
  getCounty(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  getRangeForCounty(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  setCounty(
    owner: JudoIdentifiable<ServiceCreateIssueInput>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  unsetCounty(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<JudoRestResponse<void>>;
  getTemplateForDistrict(): Promise<JudoRestResponse<ServiceDistrict>>;
  getDistrict(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getRangeForDistrict(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  setDistrict(
    owner: JudoIdentifiable<ServiceCreateIssueInput>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  unsetDistrict(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<JudoRestResponse<void>>;
  getTemplateForIssueType(): Promise<JudoRestResponse<ServiceIssueType>>;
  getIssueType(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  getRangeForIssueType(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueTypeStored>>>;
  setIssueType(
    owner: JudoIdentifiable<ServiceCreateIssueInput>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<JudoRestResponse<void>>;
  unsetIssueType(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<JudoRestResponse<void>>;
}
