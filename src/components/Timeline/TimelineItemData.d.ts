import SupportDocument from "./SupportDocument";

type TimelineItemData = {
  from?: string | null,
  to?: string | null,
  title?: string | null,
  subtitle?: string | null,
  contents?: readonly (string | null)[] | null,
  supportDocuments?: readonly SupportDocument[] | null
}

export default TimelineItemData;