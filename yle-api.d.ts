
/**
 * Meta data information concerning the actual Program.
 */
interface YleMeta {
    // NOTE why is the offset and limit a string yet the count, program and clip are numbers? Aren't they all numbers?
    offset: string;
    limit: string;
    count: number;
    program: number;
    clip: number;
}

/**
 * Video data information.
 */
interface YleProgramVideo {
    format: {
        inScheme: string;
        type: string;
        key: string;
    }[];
    language: string[];
    type: string;
}

/**
 * Information on the available content rating for the requested content
 */
interface YleContentRating {
    /**
     * Title for the rating information
     */
    title: string;

    /**
     * Reasons(?) for the rating and the title.
     */
    reason: string[];
}

interface YleProgramData {
    description: { [language: string]: string; };

    video: YleProgramVideo;

    /**
     * Type of media: "TVContent" or "RadionContent".
     */
    typeMedia: string;

    creator: string[];

    /**
     * Date in string format, including the timezone offset; for example,
     * "2014-10-03T13:40:24.614+03:00".
     */
    indexDataModified: string;

    /**
     * Alternative ID; for example, "12-1021-4-379522".
     */
    alternativeId: string[];

    /**
     * Type: "RadioProgram" or "TvProgram".
     */
    type: string;

    /**
     * Play time for the clip, a.k.a duration.
     * For example:
     * - 45 minutes is described as: "PT45M"
     * - 2 hours and 23minutes is described as: "PT2H45M"
     */
    duration: string;

    /**
     * Rating information and reasoning.
     */
    contentRating: YleContentRating;

    /**
     * Contains the YLE friendly translations for the title.
     * Example usage:
     *      title["fi"] = "Fakta ja Kulttuuri";
     *      title["en"] = "Fact and Culture";
     */
    title: {
        [language: string]: string;
    };

    "itemTitle": {},

    countryOfOrigin: string[];

    /**
     * ID for the Data; for example, "1-2386316".
     */
    id: string;

    /**
     * For example "Program".
     */
    typeCreative: string;

    "image": {},
    "audio": [],
    "originalTitle": {},
    "publicationEvent": [
        {
            "service": {
                "id": "yle-puhe"
            },
            "startTime": "2014-10-05T06:03:00+03:00",
            "temporalStatus": "in-past",
            "endTime": "2014-10-05T06:48:00+03:00",
            "type": "ScheduledTransmission",
            "duration": "PT45M",
            "region": "World",
            "id": "4-3747071",
            "media": {}
        }
    ],
    "collection": "main",
    "subject": [
        {
            "id": "5-218",
            "title": {
                "fi": "Fakta ja Kulttuuri",
                "sv": "Fakta och kultur"
            },
            "broader": {
                "id": "5-200"
            },
            "inScheme": "areena-content-classification",
            "type": "Concept",
            "key": "faktajakulttuuri"
        },
        {
            "id": "21-2",
            "title": {
                "fi": "Ajankohtaisohjelmat",
                "en": "Current Affairs"
            },
            "inScheme": "finnpanel-genre-classification",
            "type": "Concept",
            "notation": [
                {
                    "value": "2",
                    "valueType": "finnpanel-notation"
                }
            ]
        }
    ],
    "subtitling": []
}

interface YlePrograms {
    /**
     * Semversioned api version.
     */
    apiVersion: string;

    /**
     * Meta information for the Programs API.
     */
    meta: YleMeta;

    /**
     * Currently available Programs, both Radio and TV.
     */
    data: YleProgramData[];
};
