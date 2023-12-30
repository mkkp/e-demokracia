//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-api/rest/'+'MaskBuilder.ts'
// Template name: maskBuilder.ts.hbs
// Template file: rest/maskBuilder.ts.hbs

export class MaskBuilder {
  constructor(protected props: Array<string | MaskBuilder>) {}

  build(): string {
    const distinctStrings = Array.from(new Set(this.props.filter((p) => typeof p === 'string')));
    const distinctBuilders = Array.from(
      new Set(this.props.filter((p) => p instanceof MaskBuilder).map((p) => (p as MaskBuilder).build())),
    );

    return `{${[...distinctStrings, ...distinctBuilders].join(',')}}`;
  }
}

export class RelationMaskBuilder extends MaskBuilder {
  constructor(protected name: string, protected props: Array<string | RelationMaskBuilder>) {
    super(props);
  }

  build(): string {
    return `${this.name}${super.build()}`;
  }
}
