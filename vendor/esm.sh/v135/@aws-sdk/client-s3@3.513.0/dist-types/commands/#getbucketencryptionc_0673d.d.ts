import { Command as $Command } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
import { MetadataBearer as __MetadataBearer } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { GetBucketEncryptionOutput, GetBucketEncryptionRequest } from "../models/models_0.d.ts";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.d.ts";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketEncryptionCommand}.
 */
export interface GetBucketEncryptionCommandInput extends GetBucketEncryptionRequest {
}
/**
 * @public
 *
 * The output of {@link GetBucketEncryptionCommand}.
 */
export interface GetBucketEncryptionCommandOutput extends GetBucketEncryptionOutput, __MetadataBearer {
}
declare const GetBucketEncryptionCommand_base: {
    new (input: GetBucketEncryptionCommandInput): import("https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts").CommandImpl<GetBucketEncryptionCommandInput, GetBucketEncryptionCommandOutput, S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("https://esm.sh/v135/@smithy/middleware-endpoint@2.4.1/dist-types/index.d.ts").EndpointParameterInstructions;
};
/**
 * @public
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns the default encryption configuration for an Amazon S3 bucket. By default, all buckets
 *          have a default encryption configuration that uses server-side encryption with Amazon S3 managed
 *          keys (SSE-S3). For information about the bucket default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Bucket
 *             Default Encryption</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:GetEncryptionConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>The following operations are related to <code>GetBucketEncryption</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html">PutBucketEncryption</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html">DeleteBucketEncryption</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketEncryptionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketEncryptionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketEncryptionRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketEncryptionOutput
 * //   ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //     Rules: [ // ServerSideEncryptionRules // required
 * //       { // ServerSideEncryptionRule
 * //         ApplyServerSideEncryptionByDefault: { // ServerSideEncryptionByDefault
 * //           SSEAlgorithm: "AES256" || "aws:kms" || "aws:kms:dsse", // required
 * //           KMSMasterKeyID: "STRING_VALUE",
 * //         },
 * //         BucketKeyEnabled: true || false,
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketEncryptionCommandInput - {@link GetBucketEncryptionCommandInput}
 * @returns {@link GetBucketEncryptionCommandOutput}
 * @see {@link GetBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link GetBucketEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export declare class GetBucketEncryptionCommand extends GetBucketEncryptionCommand_base {
}
