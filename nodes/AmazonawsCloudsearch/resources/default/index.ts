import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Build Suggesters",
					"value": "GET Build Suggesters",
					"action": "GET Build Suggesters",
					"description": "Indexes the search suggestions. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters\">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=BuildSuggesters"
						}
					}
				},
				{
					"name": "POST Build Suggesters",
					"value": "POST Build Suggesters",
					"action": "POST Build Suggesters",
					"description": "Indexes the search suggestions. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters\">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=BuildSuggesters"
						}
					}
				},
				{
					"name": "GET Create Domain",
					"value": "GET Create Domain",
					"action": "GET Create Domain",
					"description": "Creates a new search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html\" target=\"_blank\">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=CreateDomain"
						}
					}
				},
				{
					"name": "POST Create Domain",
					"value": "POST Create Domain",
					"action": "POST Create Domain",
					"description": "Creates a new search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html\" target=\"_blank\">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=CreateDomain"
						}
					}
				},
				{
					"name": "GET Define Analysis Scheme",
					"value": "GET Define Analysis Scheme",
					"action": "GET Define Analysis Scheme",
					"description": "Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DefineAnalysisScheme"
						}
					}
				},
				{
					"name": "POST Define Analysis Scheme",
					"value": "POST Define Analysis Scheme",
					"action": "POST Define Analysis Scheme",
					"description": "Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DefineAnalysisScheme"
						}
					}
				},
				{
					"name": "GET Define Expression",
					"value": "GET Define Expression",
					"action": "GET Define Expression",
					"description": "Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DefineExpression"
						}
					}
				},
				{
					"name": "POST Define Expression",
					"value": "POST Define Expression",
					"action": "POST Define Expression",
					"description": "Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DefineExpression"
						}
					}
				},
				{
					"name": "GET Define Index Field",
					"value": "GET Define Index Field",
					"action": "GET Define Index Field",
					"description": "Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html\" target=\"_blank\">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DefineIndexField"
						}
					}
				},
				{
					"name": "POST Define Index Field",
					"value": "POST Define Index Field",
					"action": "POST Define Index Field",
					"description": "Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html\" target=\"_blank\">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DefineIndexField"
						}
					}
				},
				{
					"name": "GET Define Suggester",
					"value": "GET Define Suggester",
					"action": "GET Define Suggester",
					"description": "Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DefineSuggester"
						}
					}
				},
				{
					"name": "POST Define Suggester",
					"value": "POST Define Suggester",
					"action": "POST Define Suggester",
					"description": "Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DefineSuggester"
						}
					}
				},
				{
					"name": "GET Delete Analysis Scheme",
					"value": "GET Delete Analysis Scheme",
					"action": "GET Delete Analysis Scheme",
					"description": "Deletes an analysis scheme. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DeleteAnalysisScheme"
						}
					}
				},
				{
					"name": "POST Delete Analysis Scheme",
					"value": "POST Delete Analysis Scheme",
					"action": "POST Delete Analysis Scheme",
					"description": "Deletes an analysis scheme. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DeleteAnalysisScheme"
						}
					}
				},
				{
					"name": "GET Delete Domain",
					"value": "GET Delete Domain",
					"action": "GET Delete Domain",
					"description": "Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html\" target=\"_blank\">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DeleteDomain"
						}
					}
				},
				{
					"name": "POST Delete Domain",
					"value": "POST Delete Domain",
					"action": "POST Delete Domain",
					"description": "Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html\" target=\"_blank\">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DeleteDomain"
						}
					}
				},
				{
					"name": "GET Delete Expression",
					"value": "GET Delete Expression",
					"action": "GET Delete Expression",
					"description": "Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DeleteExpression"
						}
					}
				},
				{
					"name": "POST Delete Expression",
					"value": "POST Delete Expression",
					"action": "POST Delete Expression",
					"description": "Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DeleteExpression"
						}
					}
				},
				{
					"name": "GET Delete Index Field",
					"value": "GET Delete Index Field",
					"action": "GET Delete Index Field",
					"description": "Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html\" target=\"_blank\">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DeleteIndexField"
						}
					}
				},
				{
					"name": "POST Delete Index Field",
					"value": "POST Delete Index Field",
					"action": "POST Delete Index Field",
					"description": "Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html\" target=\"_blank\">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DeleteIndexField"
						}
					}
				},
				{
					"name": "GET Delete Suggester",
					"value": "GET Delete Suggester",
					"action": "GET Delete Suggester",
					"description": "Deletes a suggester. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DeleteSuggester"
						}
					}
				},
				{
					"name": "POST Delete Suggester",
					"value": "POST Delete Suggester",
					"action": "POST Delete Suggester",
					"description": "Deletes a suggester. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DeleteSuggester"
						}
					}
				},
				{
					"name": "GET Describe Analysis Schemes",
					"value": "GET Describe Analysis Schemes",
					"action": "GET Describe Analysis Schemes",
					"description": "Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeAnalysisSchemes"
						}
					}
				},
				{
					"name": "POST Describe Analysis Schemes",
					"value": "POST Describe Analysis Schemes",
					"action": "POST Describe Analysis Schemes",
					"description": "Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeAnalysisSchemes"
						}
					}
				},
				{
					"name": "GET Describe Availability Options",
					"value": "GET Describe Availability Options",
					"action": "GET Describe Availability Options",
					"description": "Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeAvailabilityOptions"
						}
					}
				},
				{
					"name": "POST Describe Availability Options",
					"value": "POST Describe Availability Options",
					"action": "POST Describe Availability Options",
					"description": "Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeAvailabilityOptions"
						}
					}
				},
				{
					"name": "GET Describe Domain Endpoint Options",
					"value": "GET Describe Domain Endpoint Options",
					"action": "GET Describe Domain Endpoint Options",
					"description": "Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html\" target=\"_blank\">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeDomainEndpointOptions"
						}
					}
				},
				{
					"name": "POST Describe Domain Endpoint Options",
					"value": "POST Describe Domain Endpoint Options",
					"action": "POST Describe Domain Endpoint Options",
					"description": "Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html\" target=\"_blank\">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeDomainEndpointOptions"
						}
					}
				},
				{
					"name": "GET Describe Domains",
					"value": "GET Describe Domains",
					"action": "GET Describe Domains",
					"description": "Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html\" target=\"_blank\">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeDomains"
						}
					}
				},
				{
					"name": "POST Describe Domains",
					"value": "POST Describe Domains",
					"action": "POST Describe Domains",
					"description": "Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html\" target=\"_blank\">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeDomains"
						}
					}
				},
				{
					"name": "GET Describe Expressions",
					"value": "GET Describe Expressions",
					"action": "GET Describe Expressions",
					"description": "Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeExpressions"
						}
					}
				},
				{
					"name": "POST Describe Expressions",
					"value": "POST Describe Expressions",
					"action": "POST Describe Expressions",
					"description": "Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeExpressions"
						}
					}
				},
				{
					"name": "GET Describe Index Fields",
					"value": "GET Describe Index Fields",
					"action": "GET Describe Index Fields",
					"description": "Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html\" target=\"_blank\">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeIndexFields"
						}
					}
				},
				{
					"name": "POST Describe Index Fields",
					"value": "POST Describe Index Fields",
					"action": "POST Describe Index Fields",
					"description": "Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html\" target=\"_blank\">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeIndexFields"
						}
					}
				},
				{
					"name": "GET Describe Scaling Parameters",
					"value": "GET Describe Scaling Parameters",
					"action": "GET Describe Scaling Parameters",
					"description": "Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html\" target=\"_blank\">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeScalingParameters"
						}
					}
				},
				{
					"name": "POST Describe Scaling Parameters",
					"value": "POST Describe Scaling Parameters",
					"action": "POST Describe Scaling Parameters",
					"description": "Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html\" target=\"_blank\">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeScalingParameters"
						}
					}
				},
				{
					"name": "GET Describe Service Access Policies",
					"value": "GET Describe Service Access Policies",
					"action": "GET Describe Service Access Policies",
					"description": "Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html\" target=\"_blank\">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeServiceAccessPolicies"
						}
					}
				},
				{
					"name": "POST Describe Service Access Policies",
					"value": "POST Describe Service Access Policies",
					"action": "POST Describe Service Access Policies",
					"description": "Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html\" target=\"_blank\">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeServiceAccessPolicies"
						}
					}
				},
				{
					"name": "GET Describe Suggesters",
					"value": "GET Describe Suggesters",
					"action": "GET Describe Suggesters",
					"description": "Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=DescribeSuggesters"
						}
					}
				},
				{
					"name": "POST Describe Suggesters",
					"value": "POST Describe Suggesters",
					"action": "POST Describe Suggesters",
					"description": "Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=DescribeSuggesters"
						}
					}
				},
				{
					"name": "GET Index Documents",
					"value": "GET Index Documents",
					"action": "GET Index Documents",
					"description": "Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=IndexDocuments"
						}
					}
				},
				{
					"name": "POST Index Documents",
					"value": "POST Index Documents",
					"action": "POST Index Documents",
					"description": "Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=IndexDocuments"
						}
					}
				},
				{
					"name": "GET List Domain Names",
					"value": "GET List Domain Names",
					"action": "GET List Domain Names",
					"description": "Lists all search domains owned by an account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=ListDomainNames"
						}
					}
				},
				{
					"name": "POST List Domain Names",
					"value": "POST List Domain Names",
					"action": "POST List Domain Names",
					"description": "Lists all search domains owned by an account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=ListDomainNames"
						}
					}
				},
				{
					"name": "GET Update Availability Options",
					"value": "GET Update Availability Options",
					"action": "GET Update Availability Options",
					"description": "Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=UpdateAvailabilityOptions"
						}
					}
				},
				{
					"name": "POST Update Availability Options",
					"value": "POST Update Availability Options",
					"action": "POST Update Availability Options",
					"description": "Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=UpdateAvailabilityOptions"
						}
					}
				},
				{
					"name": "GET Update Domain Endpoint Options",
					"value": "GET Update Domain Endpoint Options",
					"action": "GET Update Domain Endpoint Options",
					"description": "Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html\" target=\"_blank\">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=UpdateDomainEndpointOptions"
						}
					}
				},
				{
					"name": "POST Update Domain Endpoint Options",
					"value": "POST Update Domain Endpoint Options",
					"action": "POST Update Domain Endpoint Options",
					"description": "Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html\" target=\"_blank\">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=UpdateDomainEndpointOptions"
						}
					}
				},
				{
					"name": "GET Update Scaling Parameters",
					"value": "GET Update Scaling Parameters",
					"action": "GET Update Scaling Parameters",
					"description": "Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html\" target=\"_blank\">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=UpdateScalingParameters"
						}
					}
				},
				{
					"name": "POST Update Scaling Parameters",
					"value": "POST Update Scaling Parameters",
					"action": "POST Update Scaling Parameters",
					"description": "Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html\" target=\"_blank\">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=UpdateScalingParameters"
						}
					}
				},
				{
					"name": "GET Update Service Access Policies",
					"value": "GET Update Service Access Policies",
					"action": "GET Update Service Access Policies",
					"description": "Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html\" target=\"_blank\"> Configuring Access for an Amazon CloudSearch Domain</a>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/#Action=UpdateServiceAccessPolicies"
						}
					}
				},
				{
					"name": "POST Update Service Access Policies",
					"value": "POST Update Service Access Policies",
					"action": "POST Update Service Access Policies",
					"description": "Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html\" target=\"_blank\"> Configuring Access for an Amazon CloudSearch Domain</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#Action=UpdateServiceAccessPolicies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /#Action=BuildSuggesters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "BuildSuggesters",
			"type": "options",
			"options": [
				{
					"name": "Build Suggesters",
					"value": "BuildSuggesters"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=BuildSuggesters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "BuildSuggesters",
			"type": "options",
			"options": [
				{
					"name": "Build Suggesters",
					"value": "BuildSuggesters"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=BuildSuggesters<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Build Suggesters"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=CreateDomain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "CreateDomain",
			"type": "options",
			"options": [
				{
					"name": "Create Domain",
					"value": "CreateDomain"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Create Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=CreateDomain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "CreateDomain",
			"type": "options",
			"options": [
				{
					"name": "Create Domain",
					"value": "CreateDomain"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Create Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=CreateDomain<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Create Domain"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DefineAnalysisScheme",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Analysis Scheme",
			"name": "AnalysisScheme",
			"required": true,
			"description": "",
			"default": "{\n  \"AnalysisOptions\": {\n    \"Stopwords\": {},\n    \"StemmingDictionary\": {},\n    \"JapaneseTokenizationDictionary\": {},\n    \"AlgorithmicStemming\": {}\n  }\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "AnalysisScheme",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DefineAnalysisScheme",
			"type": "options",
			"options": [
				{
					"name": "Define Analysis Scheme",
					"value": "DefineAnalysisScheme"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DefineAnalysisScheme",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DefineAnalysisScheme",
			"type": "options",
			"options": [
				{
					"name": "Define Analysis Scheme",
					"value": "DefineAnalysisScheme"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DefineAnalysisScheme<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DefineExpression",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Expression"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Expression"
					]
				}
			}
		},
		{
			"displayName": "Expression",
			"name": "Expression",
			"required": true,
			"description": "",
			"default": "{}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "Expression",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Expression"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DefineExpression",
			"type": "options",
			"options": [
				{
					"name": "Define Expression",
					"value": "DefineExpression"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Expression"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Expression"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Expression"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DefineExpression",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Expression"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DefineExpression",
			"type": "options",
			"options": [
				{
					"name": "Define Expression",
					"value": "DefineExpression"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Expression"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Expression"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DefineExpression<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Expression"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Expression"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DefineIndexField",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "Index Field",
			"name": "IndexField",
			"required": true,
			"description": "The index field and field options you want to configure. ",
			"default": "{\n  \"IntOptions\": {\n    \"DefaultValue\": {},\n    \"SourceField\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {},\n    \"SortEnabled\": {}\n  },\n  \"DoubleOptions\": {\n    \"DefaultValue\": {},\n    \"SourceField\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {},\n    \"SortEnabled\": {}\n  },\n  \"LiteralOptions\": {\n    \"DefaultValue\": {},\n    \"SourceField\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {},\n    \"SortEnabled\": {}\n  },\n  \"TextOptions\": {\n    \"DefaultValue\": {},\n    \"SourceField\": {},\n    \"ReturnEnabled\": {},\n    \"SortEnabled\": {},\n    \"HighlightEnabled\": {},\n    \"AnalysisScheme\": {}\n  },\n  \"DateOptions\": {\n    \"DefaultValue\": {},\n    \"SourceField\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {},\n    \"SortEnabled\": {}\n  },\n  \"LatLonOptions\": {\n    \"DefaultValue\": {},\n    \"SourceField\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {},\n    \"SortEnabled\": {}\n  },\n  \"IntArrayOptions\": {\n    \"DefaultValue\": {},\n    \"SourceFields\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {}\n  },\n  \"DoubleArrayOptions\": {\n    \"DefaultValue\": {},\n    \"SourceFields\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {}\n  },\n  \"LiteralArrayOptions\": {\n    \"DefaultValue\": {},\n    \"SourceFields\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {}\n  },\n  \"TextArrayOptions\": {\n    \"DefaultValue\": {},\n    \"SourceFields\": {},\n    \"ReturnEnabled\": {},\n    \"HighlightEnabled\": {},\n    \"AnalysisScheme\": {}\n  },\n  \"DateArrayOptions\": {\n    \"DefaultValue\": {},\n    \"SourceFields\": {},\n    \"FacetEnabled\": {},\n    \"SearchEnabled\": {},\n    \"ReturnEnabled\": {}\n  }\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "IndexField",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DefineIndexField",
			"type": "options",
			"options": [
				{
					"name": "Define Index Field",
					"value": "DefineIndexField"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DefineIndexField",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DefineIndexField",
			"type": "options",
			"options": [
				{
					"name": "Define Index Field",
					"value": "DefineIndexField"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DefineIndexField<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Index Field"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DefineSuggester",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "Suggester",
			"name": "Suggester",
			"required": true,
			"description": "",
			"default": "{\n  \"DocumentSuggesterOptions\": {\n    \"FuzzyMatching\": {},\n    \"SortExpression\": {}\n  }\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "Suggester",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DefineSuggester",
			"type": "options",
			"options": [
				{
					"name": "Define Suggester",
					"value": "DefineSuggester"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DefineSuggester",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DefineSuggester",
			"type": "options",
			"options": [
				{
					"name": "Define Suggester",
					"value": "DefineSuggester"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DefineSuggester<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Define Suggester"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DeleteAnalysisScheme",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Analysis Scheme Name",
			"name": "AnalysisSchemeName",
			"required": true,
			"description": "The name of the analysis scheme you want to delete.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "AnalysisSchemeName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteAnalysisScheme",
			"type": "options",
			"options": [
				{
					"name": "Delete Analysis Scheme",
					"value": "DeleteAnalysisScheme"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteAnalysisScheme",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteAnalysisScheme",
			"type": "options",
			"options": [
				{
					"name": "Delete Analysis Scheme",
					"value": "DeleteAnalysisScheme"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteAnalysisScheme<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Analysis Scheme"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DeleteDomain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "The name of the domain you want to permanently delete.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteDomain",
			"type": "options",
			"options": [
				{
					"name": "Delete Domain",
					"value": "DeleteDomain"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteDomain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteDomain",
			"type": "options",
			"options": [
				{
					"name": "Delete Domain",
					"value": "DeleteDomain"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteDomain<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DeleteExpression",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "Expression Name",
			"name": "ExpressionName",
			"required": true,
			"description": "The name of the <code><a>Expression</a></code> to delete.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ExpressionName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteExpression",
			"type": "options",
			"options": [
				{
					"name": "Delete Expression",
					"value": "DeleteExpression"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteExpression",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteExpression",
			"type": "options",
			"options": [
				{
					"name": "Delete Expression",
					"value": "DeleteExpression"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteExpression<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Expression"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DeleteIndexField",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "Index Field Name",
			"name": "IndexFieldName",
			"required": true,
			"description": "The name of the index field your want to remove from the domain's indexing options.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "IndexFieldName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteIndexField",
			"type": "options",
			"options": [
				{
					"name": "Delete Index Field",
					"value": "DeleteIndexField"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteIndexField",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteIndexField",
			"type": "options",
			"options": [
				{
					"name": "Delete Index Field",
					"value": "DeleteIndexField"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteIndexField<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Index Field"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DeleteSuggester",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "Suggester Name",
			"name": "SuggesterName",
			"required": true,
			"description": "Specifies the name of the suggester you want to delete.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "SuggesterName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteSuggester",
			"type": "options",
			"options": [
				{
					"name": "Delete Suggester",
					"value": "DeleteSuggester"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteSuggester",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DeleteSuggester",
			"type": "options",
			"options": [
				{
					"name": "Delete Suggester",
					"value": "DeleteSuggester"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DeleteSuggester<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Suggester"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeAnalysisSchemes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "The name of the domain you want to describe.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Analysis Scheme Names",
			"name": "AnalysisSchemeNames",
			"description": "The analysis schemes you want to describe.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "AnalysisSchemeNames",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Deployed",
			"name": "Deployed",
			"description": "Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "Deployed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeAnalysisSchemes",
			"type": "options",
			"options": [
				{
					"name": "Describe Analysis Schemes",
					"value": "DescribeAnalysisSchemes"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeAnalysisSchemes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeAnalysisSchemes",
			"type": "options",
			"options": [
				{
					"name": "Describe Analysis Schemes",
					"value": "DescribeAnalysisSchemes"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeAnalysisSchemes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Analysis Schemes"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeAvailabilityOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "The name of the domain you want to describe.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Deployed",
			"name": "Deployed",
			"description": "Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "Deployed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeAvailabilityOptions",
			"type": "options",
			"options": [
				{
					"name": "Describe Availability Options",
					"value": "DescribeAvailabilityOptions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeAvailabilityOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeAvailabilityOptions",
			"type": "options",
			"options": [
				{
					"name": "Describe Availability Options",
					"value": "DescribeAvailabilityOptions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeAvailabilityOptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Availability Options"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeDomainEndpointOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "A string that represents the name of a domain.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Deployed",
			"name": "Deployed",
			"description": "Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "Deployed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeDomainEndpointOptions",
			"type": "options",
			"options": [
				{
					"name": "Describe Domain Endpoint Options",
					"value": "DescribeDomainEndpointOptions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeDomainEndpointOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeDomainEndpointOptions",
			"type": "options",
			"options": [
				{
					"name": "Describe Domain Endpoint Options",
					"value": "DescribeDomainEndpointOptions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeDomainEndpointOptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeDomains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "Domain Names",
			"name": "DomainNames",
			"description": "The names of the domains you want to include in the response.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainNames",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeDomains",
			"type": "options",
			"options": [
				{
					"name": "Describe Domains",
					"value": "DescribeDomains"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeDomains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeDomains",
			"type": "options",
			"options": [
				{
					"name": "Describe Domains",
					"value": "DescribeDomains"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeDomains<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Domains"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeExpressions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "The name of the domain you want to describe.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Expression Names",
			"name": "ExpressionNames",
			"description": "Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ExpressionNames",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Deployed",
			"name": "Deployed",
			"description": "Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "Deployed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeExpressions",
			"type": "options",
			"options": [
				{
					"name": "Describe Expressions",
					"value": "DescribeExpressions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeExpressions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeExpressions",
			"type": "options",
			"options": [
				{
					"name": "Describe Expressions",
					"value": "DescribeExpressions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeExpressions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Expressions"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeIndexFields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "The name of the domain you want to describe.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Field Names",
			"name": "FieldNames",
			"description": "A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "FieldNames",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Deployed",
			"name": "Deployed",
			"description": "Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "Deployed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeIndexFields",
			"type": "options",
			"options": [
				{
					"name": "Describe Index Fields",
					"value": "DescribeIndexFields"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeIndexFields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeIndexFields",
			"type": "options",
			"options": [
				{
					"name": "Describe Index Fields",
					"value": "DescribeIndexFields"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeIndexFields<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Index Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeScalingParameters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeScalingParameters",
			"type": "options",
			"options": [
				{
					"name": "Describe Scaling Parameters",
					"value": "DescribeScalingParameters"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeScalingParameters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeScalingParameters",
			"type": "options",
			"options": [
				{
					"name": "Describe Scaling Parameters",
					"value": "DescribeScalingParameters"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeScalingParameters<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeServiceAccessPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "The name of the domain you want to describe.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Deployed",
			"name": "Deployed",
			"description": "Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "Deployed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeServiceAccessPolicies",
			"type": "options",
			"options": [
				{
					"name": "Describe Service Access Policies",
					"value": "DescribeServiceAccessPolicies"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeServiceAccessPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeServiceAccessPolicies",
			"type": "options",
			"options": [
				{
					"name": "Describe Service Access Policies",
					"value": "DescribeServiceAccessPolicies"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeServiceAccessPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=DescribeSuggesters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "The name of the domain you want to describe.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Suggester Names",
			"name": "SuggesterNames",
			"description": "The suggesters you want to describe.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "SuggesterNames",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Deployed",
			"name": "Deployed",
			"description": "Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "Deployed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeSuggesters",
			"type": "options",
			"options": [
				{
					"name": "Describe Suggesters",
					"value": "DescribeSuggesters"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeSuggesters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "DescribeSuggesters",
			"type": "options",
			"options": [
				{
					"name": "Describe Suggesters",
					"value": "DescribeSuggesters"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=DescribeSuggesters<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Describe Suggesters"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=IndexDocuments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Index Documents"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Index Documents"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "IndexDocuments",
			"type": "options",
			"options": [
				{
					"name": "Index Documents",
					"value": "IndexDocuments"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Index Documents"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Index Documents"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Index Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=IndexDocuments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Index Documents"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "IndexDocuments",
			"type": "options",
			"options": [
				{
					"name": "Index Documents",
					"value": "IndexDocuments"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Index Documents"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Index Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=IndexDocuments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Index Documents"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Index Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=ListDomainNames",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET List Domain Names"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "ListDomainNames",
			"type": "options",
			"options": [
				{
					"name": "List Domain Names",
					"value": "ListDomainNames"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET List Domain Names"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET List Domain Names"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET List Domain Names"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=ListDomainNames",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST List Domain Names"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "ListDomainNames",
			"type": "options",
			"options": [
				{
					"name": "List Domain Names",
					"value": "ListDomainNames"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST List Domain Names"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST List Domain Names"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST List Domain Names"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=UpdateAvailabilityOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Multi AZ",
			"name": "MultiAZ",
			"required": true,
			"description": "You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. ",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "MultiAZ",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "UpdateAvailabilityOptions",
			"type": "options",
			"options": [
				{
					"name": "Update Availability Options",
					"value": "UpdateAvailabilityOptions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=UpdateAvailabilityOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "UpdateAvailabilityOptions",
			"type": "options",
			"options": [
				{
					"name": "Update Availability Options",
					"value": "UpdateAvailabilityOptions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=UpdateAvailabilityOptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Availability Options"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=UpdateDomainEndpointOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "A string that represents the name of a domain.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Domain Endpoint Options",
			"name": "DomainEndpointOptions",
			"required": true,
			"description": "Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. ",
			"default": "{\n  \"TLSSecurityPolicy\": {}\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainEndpointOptions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "UpdateDomainEndpointOptions",
			"type": "options",
			"options": [
				{
					"name": "Update Domain Endpoint Options",
					"value": "UpdateDomainEndpointOptions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=UpdateDomainEndpointOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "UpdateDomainEndpointOptions",
			"type": "options",
			"options": [
				{
					"name": "Update Domain Endpoint Options",
					"value": "UpdateDomainEndpointOptions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=UpdateDomainEndpointOptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Domain Endpoint Options"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=UpdateScalingParameters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Scaling Parameters",
			"name": "ScalingParameters",
			"required": true,
			"description": "",
			"default": "{\n  \"DesiredReplicationCount\": {},\n  \"DesiredPartitionCount\": {}\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ScalingParameters",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "UpdateScalingParameters",
			"type": "options",
			"options": [
				{
					"name": "Update Scaling Parameters",
					"value": "UpdateScalingParameters"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=UpdateScalingParameters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "UpdateScalingParameters",
			"type": "options",
			"options": [
				{
					"name": "Update Scaling Parameters",
					"value": "UpdateScalingParameters"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=UpdateScalingParameters<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Scaling Parameters"
					]
				}
			}
		},
		{
			"displayName": "GET /#Action=UpdateServiceAccessPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "DomainName",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DomainName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Access Policies",
			"name": "AccessPolicies",
			"required": true,
			"description": "The access rules you want to configure. These rules replace any existing rules. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "AccessPolicies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "UpdateServiceAccessPolicies",
			"type": "options",
			"options": [
				{
					"name": "Update Service Access Policies",
					"value": "UpdateServiceAccessPolicies"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=UpdateServiceAccessPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "Action",
			"required": true,
			"default": "UpdateServiceAccessPolicies",
			"type": "options",
			"options": [
				{
					"name": "Update Service Access Policies",
					"value": "UpdateServiceAccessPolicies"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "Version",
			"required": true,
			"default": "2013-01-01",
			"type": "options",
			"options": [
				{
					"name": "2013 01 01",
					"value": "2013-01-01"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /#Action=UpdateServiceAccessPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Service Access Policies"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Update Service Access Policies"
					]
				}
			}
		},
];
