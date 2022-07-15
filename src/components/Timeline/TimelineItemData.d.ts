import SupportDocument from "./SupportDocument";

type TimelineItemData = {
  from: string,
  to: string,
  title: string,
  subtitle: string,
  contents?: string[],
  supportDocuments: SupportDocument[]
}

export default TimelineItemData;